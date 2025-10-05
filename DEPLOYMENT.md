# Deployment Guide - AWS CloudFront

This guide will help you deploy the Chee Classes React site to AWS CloudFront.

## Prerequisites

- AWS Account
- GitHub repository with the code
- AWS CLI installed locally (for initial setup)

## Step 1: AWS Setup

### 1.1 Create an S3 Bucket

1. Go to AWS S3 Console
2. Click "Create bucket"
3. Bucket name: `chee-classes` (or your preferred unique name)
4. Region: `us-east-1` (or your preferred region)
5. **Uncheck** "Block all public access" (we'll use CloudFront for public access)
6. Click "Create bucket"

### 1.2 Configure S3 Bucket for Static Website Hosting

1. Go to your bucket → Properties
2. Scroll to "Static website hosting"
3. Click "Edit"
4. Enable static website hosting
5. Index document: `index.html`
6. Error document: `index.html` (for React Router)
7. Save changes

### 1.3 Set Bucket Policy

Go to Permissions → Bucket Policy and add:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::chee-classes/*"
    }
  ]
}
```

Replace `chee-classes` with your actual bucket name.

### 1.4 Create CloudFront Distribution

1. Go to AWS CloudFront Console
2. Click "Create distribution"
3. Origin domain: Select your S3 bucket
4. Origin access: "Origin access control settings (recommended)"
   - Click "Create control setting"
   - Create with default settings
5. Default root object: `index.html`
6. Click "Create distribution"
7. **Copy the Distribution ID** - you'll need this later
8. Wait for deployment (Status: "Deployed")

### 1.5 Configure CloudFront Error Pages (for React Router)

1. Go to your CloudFront distribution
2. Click "Error pages" tab
3. Click "Create custom error response"
4. HTTP error code: `403`
5. Customize error response: Yes
6. Response page path: `/index.html`
7. HTTP response code: `200`
8. Click "Create custom error response"
9. Repeat for error code `404`

### 1.6 Create IAM User for GitHub Actions

1. Go to IAM Console → Users
2. Click "Add users"
3. Username: `github-actions-deploy`
4. Select "Access key - Programmatic access"
5. Click "Next: Permissions"
6. Click "Attach existing policies directly"
7. Search and select:
   - `AmazonS3FullAccess`
   - `CloudFrontFullAccess`
8. Click "Next" through remaining steps
9. Click "Create user"
10. **SAVE** the Access Key ID and Secret Access Key - you won't see them again!

## Step 2: GitHub Repository Secrets

1. Go to your GitHub repository
2. Click Settings → Secrets and variables → Actions
3. Click "New repository secret" and add these secrets:

   - **AWS_ACCESS_KEY_ID**: Your IAM user access key ID
   - **AWS_SECRET_ACCESS_KEY**: Your IAM user secret access key
   - **S3_BUCKET_NAME**: Your S3 bucket name (e.g., `chee-classes`)
   - **CLOUDFRONT_DISTRIBUTION_ID**: Your CloudFront distribution ID (e.g., `E1ABCD1234EFGH`)

## Step 3: Deploy

### First Deployment (Manual)

Build and deploy locally to test:

```bash
# Build the project
npm run build

# Install AWS CLI if not already installed
# macOS: brew install awscli
# Or download from: https://aws.amazon.com/cli/

# Configure AWS CLI
aws configure
# Enter your Access Key ID
# Enter your Secret Access Key
# Default region: us-east-1
# Default output format: json

# Sync to S3
aws s3 sync build/ s3://chee-classes --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

### Automatic Deployment

Once GitHub secrets are configured, every push to the `master` branch will automatically:
1. Build the React app
2. Deploy to S3
3. Invalidate CloudFront cache

## Step 4: Access Your Site

Your site will be available at:
- CloudFront URL: `https://d123456abcdef.cloudfront.net` (shown in CloudFront console)

## Optional: Custom Domain

To use a custom domain:

1. Go to Route 53 or your DNS provider
2. Create a CNAME record pointing to your CloudFront distribution URL
3. In CloudFront, add your custom domain as an "Alternate Domain Name (CNAME)"
4. Request an SSL certificate in AWS Certificate Manager (must be in us-east-1)
5. Add the certificate to your CloudFront distribution

## Troubleshooting

### Build fails with "JavaScript heap out of memory"
Add to package.json scripts:
```json
"build": "NODE_OPTIONS=--max_old_space_size=4096 react-scripts build"
```

### 404 errors on refresh
Make sure you configured CloudFront error pages (Step 1.5)

### Changes not showing up
CloudFront caches content. Either:
- Wait for cache to expire (default 24 hours)
- Run invalidation: `aws cloudfront create-invalidation --distribution-id YOUR_ID --paths "/*"`
- The GitHub Action does this automatically

## Cost Estimate

- S3: ~$0.023 per GB stored + minimal request costs
- CloudFront: 1 TB free per month for first 12 months, then ~$0.085 per GB
- Typical small site: <$1/month

## Security Notes

- Never commit AWS credentials to your repository
- Use GitHub Secrets for all sensitive data
- Regularly rotate IAM access keys
- Enable MFA on your AWS account

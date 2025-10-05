# Quick AWS Setup Guide

This guide will set up everything automatically using AWS CloudFormation.

## Prerequisites

1. AWS Account (create one at https://aws.amazon.com if you don't have one)
2. AWS CLI installed

### Install AWS CLI

**macOS:**
```bash
brew install awscli
```

**Windows:**
Download from: https://awscli.amazonaws.com/AWSCLIV2.msi

**Linux:**
```bash
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
```

## Step 1: Configure AWS CLI

Run this command and follow the prompts:

```bash
aws configure
```

You'll need:
- **AWS Access Key ID**: Get from AWS Console → IAM → Users → Your user → Security credentials → Create access key
- **AWS Secret Access Key**: Shown when you create the access key (save it!)
- **Default region**: `us-east-1` (recommended)
- **Default output format**: `json`

### If you don't have AWS credentials yet:

1. Go to https://console.aws.amazon.com/iam/
2. Click "Users" in the left sidebar
3. Click "Add users"
4. Username: `your-name-admin`
5. Select "Programmatic access"
6. Click "Next: Permissions"
7. Select "Attach existing policies directly"
8. Search and select "AdministratorAccess"
9. Click through to create the user
10. **SAVE the Access Key ID and Secret Access Key!**

## Step 2: Deploy the CloudFormation Stack

Run this command from your project directory:

```bash
aws cloudformation create-stack \
  --stack-name chee-classes-infrastructure \
  --template-body file://aws-setup.yml \
  --capabilities CAPABILITY_NAMED_IAM \
  --parameters ParameterKey=BucketName,ParameterValue=chee-classes-$(date +%s)
```

This creates a unique bucket name to avoid conflicts.

## Step 3: Wait for Stack Creation

Monitor the stack creation:

```bash
aws cloudformation wait stack-create-complete \
  --stack-name chee-classes-infrastructure
```

This takes about 5-10 minutes. You'll see no output while it's working.

## Step 4: Get Your Deployment Credentials

Once complete, get all the values you need:

```bash
aws cloudformation describe-stacks \
  --stack-name chee-classes-infrastructure \
  --query 'Stacks[0].Outputs' \
  --output table
```

You'll see something like:

```
--------------------------------------------------------
|                  DescribeStacks                      |
+----------------------------------+-------------------+
|          OutputKey               |   OutputValue     |
+----------------------------------+-------------------+
|  AccessKeyId                     |  AKIAIOSFODNN... |
|  BucketName                      |  chee-classes-... |
|  CloudFrontDistributionId        |  E1ABCDEFGH123   |
|  CloudFrontURL                   |  d1234.cloudfront.net |
|  SecretAccessKey                 |  wJalrXUtnFEMI... |
|  WebsiteURL                      |  https://d1234... |
+----------------------------------+-------------------+
```

**SAVE ALL THESE VALUES!**

## Step 5: Add GitHub Secrets

1. Go to: https://github.com/fizz-whu/chee-classes/settings/secrets/actions
2. Click "New repository secret" for each:

   - Name: `AWS_ACCESS_KEY_ID`
     Value: [AccessKeyId from output]

   - Name: `AWS_SECRET_ACCESS_KEY`
     Value: [SecretAccessKey from output]

   - Name: `S3_BUCKET_NAME`
     Value: [BucketName from output]

   - Name: `CLOUDFRONT_DISTRIBUTION_ID`
     Value: [CloudFrontDistributionId from output]

## Step 6: Deploy Your Site

### Option A: Automatic (trigger GitHub Action)

Make any small change and push:

```bash
echo "# Chee Classes" >> README.md
git add README.md
git commit -m "Trigger deployment"
git push origin master
```

Go to https://github.com/fizz-whu/chee-classes/actions to watch it deploy.

### Option B: Manual Deploy

```bash
# Build the site
npm run build

# Get your bucket name from the CloudFormation output
BUCKET_NAME=$(aws cloudformation describe-stacks \
  --stack-name chee-classes-infrastructure \
  --query 'Stacks[0].Outputs[?OutputKey==`BucketName`].OutputValue' \
  --output text)

# Get your distribution ID
DISTRIBUTION_ID=$(aws cloudformation describe-stacks \
  --stack-name chee-classes-infrastructure \
  --query 'Stacks[0].Outputs[?OutputKey==`CloudFrontDistributionId`].OutputValue' \
  --output text)

# Deploy to S3
aws s3 sync build/ s3://$BUCKET_NAME --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation \
  --distribution-id $DISTRIBUTION_ID \
  --paths "/*"
```

## Step 7: Get Your Live URL

```bash
aws cloudformation describe-stacks \
  --stack-name chee-classes-infrastructure \
  --query 'Stacks[0].Outputs[?OutputKey==`WebsiteURL`].OutputValue' \
  --output text
```

Your site is live at this URL! 🎉

## Troubleshooting

### "Stack already exists"
```bash
aws cloudformation delete-stack --stack-name chee-classes-infrastructure
aws cloudformation wait stack-delete-complete --stack-name chee-classes-infrastructure
# Then run create-stack again
```

### "Bucket name already exists"
The bucket name must be globally unique. The setup script adds a timestamp, but if it still fails:

```bash
aws cloudformation create-stack \
  --stack-name chee-classes-infrastructure \
  --template-body file://aws-setup.yml \
  --capabilities CAPABILITY_NAMED_IAM \
  --parameters ParameterKey=BucketName,ParameterValue=chee-classes-yourname-$(date +%s)
```

### Can't find AWS credentials
Run `aws configure` and enter your access key and secret key from IAM.

## Clean Up (Delete Everything)

To remove all resources and stop any charges:

```bash
# Empty the S3 bucket first
BUCKET_NAME=$(aws cloudformation describe-stacks \
  --stack-name chee-classes-infrastructure \
  --query 'Stacks[0].Outputs[?OutputKey==`BucketName`].OutputValue' \
  --output text)

aws s3 rm s3://$BUCKET_NAME --recursive

# Delete the stack
aws cloudformation delete-stack --stack-name chee-classes-infrastructure
```

## Cost

- **First year**: Essentially free (AWS Free Tier)
- **After**: ~$0.50-$2/month for a small site
- S3: ~$0.023/GB storage
- CloudFront: 1TB free/month first year, then ~$0.085/GB

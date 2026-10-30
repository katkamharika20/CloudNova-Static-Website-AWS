# CloudNova – Static Website Hosting Using AWS

## Project Overview

**CloudNova** is a static website hosting project that demonstrates how to deploy and deliver a responsive website using Amazon Web Services (AWS).

The project uses HTML, CSS, and JavaScript to build the website and explores AWS services such as Amazon S3, Amazon CloudFront, and Amazon Route 53 for cloud hosting, content delivery, and domain management.

## Objectives

- Host a static website using Amazon S3.
- Use Amazon CloudFront for faster content delivery.
- Configure Amazon Route 53 for domain management.
- Enable secure HTTPS communication using AWS Certificate Manager (ACM).
- Understand cloud-based website deployment and content delivery.
- Build a responsive and user-friendly website.

## Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Website structure |
| CSS3 | Styling and responsive design |
| JavaScript | Website interactivity |
| Amazon S3 | Static website storage and hosting |
| Amazon CloudFront | Content Delivery Network (CDN) |
| Amazon Route 53 | DNS and domain management |
| AWS Certificate Manager | SSL/TLS certificates |
| AWS IAM | Access and permissions management |

## System Architecture

```text
       User / Web Browser
               |
               v
        Amazon Route 53
          (DNS Service)
               |
               v
        Amazon CloudFront
           (CDN / HTTPS)
               |
               v
           Amazon S3
        (Static Website)
```

## Project Structure

```text
CloudNova-Static-Website-AWS/
│
├── website/
│   ├── index.html
│   ├── error.html
│   ├── style.css
│   ├── script.js
│   ├── images/
│   └── assets/
│
├── deployment/
│   ├── bucket-policy.json
│   ├── cloudfront-config.json
│   └── route53-record.json
│
├── documentation/
│
├── screenshots/
│
├── .gitignore
└── README.md
```

## Website Features

- Responsive website design.
- Navigation bar with smooth scrolling.
- Home and About sections.
- Services and Portfolio sections.
- Pricing and Team sections.
- Blog and Contact sections.
- Interactive navigation menu.
- Contact form interface.
- FAQ section.
- Mobile-friendly layout.

## Deployment Methodology

### 1. Website Development
The website is developed using HTML, CSS, and JavaScript.

### 2. Amazon S3
Create an S3 bucket and upload the static website files.

### 3. Amazon CloudFront
Configure a CloudFront distribution to deliver website content through edge locations.

### 4. AWS Certificate Manager
Request and validate an SSL/TLS certificate for HTTPS access.

### 5. Amazon Route 53
Configure DNS records to connect a custom domain to the CloudFront distribution.

### 6. Testing
Verify website accessibility, responsiveness, HTTPS connectivity, and content delivery.

## How to Run Locally

1. Clone this repository:

```bash
git clone https://github.com/YOUR_USERNAME/CloudNova-Static-Website-AWS.git
```

2. Navigate to the project directory:

```bash
cd CloudNova-Static-Website-AWS
```

3. Open the `website` folder.

4. Open `index.html` in your web browser.

## Advantages

- Serverless static website architecture.
- Scalable content delivery.
- Improved website loading performance.
- HTTPS support.
- Reduced server maintenance.
- Cost-effective hosting for static websites.

## Future Enhancements

- Add a backend for contact form submissions.
- Integrate analytics for website traffic monitoring.
- Improve security using CloudFront Origin Access Control (OAC).
- Implement automated deployment using CI/CD.
- Add website monitoring and performance optimization.

## Project Information

**Project Title:** Static Website Hosting Using Amazon S3, Route 53, and CloudFront

**Website Name:** CloudNova

**Student:** Katkam Harika

**Roll Number:** 2451-23-749-015

**College:** MVSR Engineering College

**Department:** Computer Science and Engineering – Allied

**Academic Year:** 2026–2027

## Conclusion

CloudNova demonstrates the concepts of static website development and AWS cloud hosting. The project provides practical understanding of Amazon S3, CloudFront, Route 53, HTTPS configuration, and scalable cloud infrastructure.

---

**Developed as an academic project for the academic year 2026–2027.**
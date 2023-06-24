import globe from '../public/images/pricing/globe.png'
import rocket from '../public/images/pricing/rocket.png'
import union from '../public/images/pricing/union.png'

export const priceplan = [
    {
        id:1, 
        title: 'Freelancer Plan',
        price: 99,
        features: ['LLC Formation', 'Registered Agent (1 year)', 'Keep your privacy, use our address', 'EIN Application', '24/7 Virtual Office', 'Compliance Notifications', '1 Business Email (1 year)', 'Banking Application Process'],
        bg:globe
    },
    {
        id:2, 
        title: 'Small Business Plan',
        price: 299,
        features: ['All Freelancer Plan PLUS:', 'Operating Agreement', 'Appointments Calendar', 'Business Phone Number (1 year)', 'Web Hosting (1 year)', 'Domain (1 year)', 'Unlimited Business Emails (1 year)', 'Website Builder (1 year)'],
        bg:rocket
    },
    {
        id:3, 
        title: 'Enterprise Plan',
        price: 499,
        features: ['All Small Business Plan PLUS:', 'Email Campaigns Powered by AI', 'Social Media Posts Powered by AI', 'Email Autoresponder (1 year)', 'Contract Templates', 'Courses Library', '3 Consultation Calls', 'IRS Filing Forms 5472 and 1120'],
        bg: union
    },
]
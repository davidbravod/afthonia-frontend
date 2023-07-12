import globe from '../public/images/pricing/globe.png'
import rocket from '../public/images/pricing/rocket.png'
import union from '../public/images/pricing/union.png'

export const priceplan = [
    {
        id:1, 
        title: 'Freelancer Plan',
        price: 99,
        features: ['LLC Formation', 'Registered Agent', 'EIN Application', 'Keep your privacy, use our address', 'Same-day documents scanning', 'Mail Forwarding', '24/7 Virtual Office', 'Compliance Notifications', 'Banking Application'],
        bg:globe
    },
    {
        id:2, 
        title: 'Small Business Plan',
        price: 299,
        features: ['All Freelancer Plan PLUS:', 'Operating Agreement for LLCs', 'Bylaws for Corporations', 'Contract Templates', 'Domain Register', 'Unlimited Business Emails', 'Email Autoresponder', 'Web Hosting', 'Wordpress Website Builder'],
        bg:rocket
    },
    {
        id:3, 
        title: 'Enterprise Plan',
        price: 499,
        features: ['All Small Business Plan PLUS:', 'Email Campaigns Powered by AI', 'Social Media Posts Powered by AI', 'Courses Library', '3 Consultation Calls', 'IRS Filing Forms 5472 and 1120'],
        bg: union
    },
]
import globe from '../public/images/pricing/globe.png'
import rocket from '../public/images/pricing/rocket.png'
import union from '../public/images/pricing/union.png'

export const priceplan = [
    {
        id:1, 
        title: 'Freelancer Plan',
        price: 99,
        features: ['LLC Formation', 'Registered Agent', 'Keep your privacy, use our address', 'Same-day documents scanning', 'Mail Forwarding', '24/7 Virtual Office', 'Compliance Notifications'],
        bg:globe
    },
    {
        id:2, 
        title: 'Small Business Plan',
        price: 199,
        features: ['All Freelancer Plan PLUS:', 'Same-day Filing', 'Same-day EIN Application', 'Operating Agreement for LLCs', 'Bylaws for Corporations', 'Contract Templates', 'Bank Application'],
        bg:rocket
    },
    {
        id:3, 
        title: 'Enterprise Plan',
        price: 499,
        features: ['All Small Business Plan PLUS:', 'Domain Register', 'Unlimited Business Emails', 'Email Auto Responder', 'Web Hosting', 'Website Builder', 'SSL Certificate'],
        bg: union
    },
]
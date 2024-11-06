import { faHouseChimney, faMoneyBill, faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons"

// export const Subscription = [
//     {
//         title:'STARTER',
//         amount:'999',
//         points:['12 Days validity.','10 Days Food','Cancel Food at any time.']
//     },
//     {
//         title:'BASIC',
//         amount:'2999',
//         points:['35 Days validity.','30 Days Food','Cancel Food at any time.']
//     }
// ]
export const NavbarLinks = [
    {
        title : 'Home',
        href : '/',
        icon : faHouseChimney,
        description:'Your gateway to delicious, homestyle meals delivered fresh.'
    },
    {
        title : 'Account',
        href : '/userprofile',
        icon : faUser,
        description:'Manage your profile and keep your details up to date..'
    },
    {
        title : 'My Subscription',
        href : '/my-subscription',
        icon : faMoneyBill,
        description:'Track your menu and make changes to your subscription.'
    },
    {
        title : 'Log Out',
        href : '/sign-in',
        icon :faRightFromBracket,
        description:'We’ll be ready when you’re back for more!.',
        color:'#BE0000'
    },
]
// export const StepDetails = [
//     {
//         title: 'Complete Your Profile ',
//         description :'Help us get to know you better by filling in your personal details',
//         buttonLabel : 'COMPLETE NOW',
//         href :"onboard"
//     },
//     {
//         title: 'Set Your Delivery Location',
//         description :'Enter your address to make sure your orders reach you quickly and accurately',
//         buttonLabel : 'ADD ADDRESS',
//         href :"add-address"
//     },
//     {
//         title: 'Choose Your Plan',
//         description :'Select a subscription plan that fits your needs and start enjoying fresh deliveries',
//         buttonLabel : 'SUBSCRIBE',
//         href :"purchase-subscription"
//     },
    
// ]
import SportsMmaIcon from '@mui/icons-material/SportsMma';

export const headerBarContent = {
  name: {
    label: "mutation warriors",
    id: "companyNameId",
    href: 'home',
    icon: <SportsMmaIcon/>,
    value: 1
  },
  blogs: {
    label: "Blogs",
    id: "blogsId",
    href: 'blogs',
    value: 2
  },
  educationalResources: {
    label: "Educational Resources",
    id: "eduResurcesId",
    value: 3
  },
  aboutUs: {
    label: "About Us",
    id: "aboutUsId",
    href: 'aboutUs',
    value: 4 
  },

  getInvolved: {
    label: "Get Involved",
    id: "getInvolvedId",
    href: 'getInvolved',
    value: 5
  },
  contactUs: {
    label: "Contact Us",
    id: "contactUsId",
    href: 'contactUs',
    value: 6
  }
  // donate: {
  //   lable: "Donate",
  //   id: "donateId",
  //   href: 'donate',
  //   value: 6
  // },
};

export default headerBarContent;

deadline_dict = {
    1: 'Contingent on Event',
    2: 'Fixed Per Quarter'
}

cause_dict = {
    1: 'Political Advocacy',
    2: 'Academic Success',
    3: 'Cultural Awareness',
    4: 'Sustainability',
    5: 'Community Service',
    6: 'General Events',
}

fundData = [
    {
        id: 0,
        fund_org: 'Academic Affairs Commission',
        fund_name: 'Academic Success Referendum (ASRF)',
        deadline: '2 weeks prior to proposed program date',
        eligibility: {
            individual: true,
            group: true
        },
        contact: 'usaaac@asucla.ucla.edu',
        about: 'Fund given to causes that support academic success of students. No non academic program allowed.',
        improve_your_chances: 'Consider feasibility, cost efficiency, benefit for future students, necessity, impact of students',

        links: {
            guidelines: 'https://usac.ucla.edu/docs/asrf_guidelines.pdf',
            application: 'https://docs.google.com/forms/d/e/1FAIpQLScJDG_qP5HUj_YINPAoyIcMVpVXHKd8UXV4moZ4O3ZFj6smFw/viewform?usp=sf_link'
        },

        tags: {
            fund_amount: '$2000 per quarter',
            deadline: 1, 
            cause: [2],               
 
        }
    },
    {
        id: 1,
        fund_org: 'Academic Affairs Commission',
        fund_name: 'Travel Grant Mini Fund',
        deadline: '3 weeks prior to proposed program date.',
        eligibility: {
            individual: true,
            group: true
        },
        contact: 'usaaac@asucla.ucla.edu',
        about: 'Provides grants for student travel and accommodation during academic events. Only academic-specific travel will be allowed, no lobbying.',
        improve_your_chances: 'All events that facilitate gathering for discussion, networking, training, academic or professional training qualify (ex. Interviews).',

        links: {
            guidelines: 'https://usac.ucla.edu/docs/tgmf_guidelines.pdf',
            application: 'https://docs.google.com/forms/d/e/1FAIpQLSdvz61zHoKszP9mFi-I6dCGymTYHsuAPXv7ajjmG6l7fBKmXg/viewform?usp=sf_link'
        },

        tags: {
            fund_amount: '$500 per quarter',
            deadline: 1, 
            cause: [2],               
 
        }
    }, 
    {
        id: 2,
        fund_org: 'Art Restoring Community (ARC)',
        fund_name: 'Referendum Funding',
        deadline: 'Fixed per quarter, exact date varies depending on quarter.',
        eligibility: {
            individual: true,
            group: true
        },
        contact: 'acarcfund@asucla.ucla.edu',
        about: 'Provides grants for student travel and accommodation during academic events. Only academic-specific travel will be allowed, no lobbying.',
        improve_your_chances: 'All events that facilitate gathering for discussion, networking, training, academic or professional training qualify (ex. Interviews).',

        links: {
            guidelines: 'https://usac.ucla.edu/docs/ARC%202019-2020%20Guidelines.pdf',
            application: 'https://usac.ucla.edu/docs/ARC%202019-2020%20Application.pdf'
        },

        tags: {
            fund_amount: '$2500 per quarter',
            deadline: 2, 
            cause: [3],               
        }
    },
    {
        id: 3,
        fund_org: '',
        fund_name: 'Bruin Advocacy Grant',
        deadline: 'Fridays, 5 weeks prior to proposed program date.',
        eligibility: {
            individual: true,
            group: true
        },
        contact: 'usac.evp.bruindefendersdir@gmail.com',
        about: 'Fund for students looking to advocate on behalf of themselves or organization for issues important to them.',
        improve_your_chances: 'Advocacy must be on local/state/national/international issues or a core mission statement in the organizations bylaws/constitution.',

        links: {
            guidelines: 'https://docs.google.com/presentation/d/1F1XP1HA533C76k7r36EEkakv90KVrh-vavDJXdLf1i4/edit',
            application: 'https://goo.gl/forms/qeHtpO6W66jVGIVq2'
        },

        tags: {
            fund_amount: '$5000 per quarter',
            deadline: 1, 
            cause: [1],               
        }
    },
    {
        id: 4,
        fund_org: '',
        fund_name: 'Community Service Mini Fund',
        deadline: 'Week 3 (Fall). Week 4 (Winter and Spring)',
        eligibility: {
            individual: false,
            group: true
        },
        contact: 'csminifund@gmail.com',
        about: 'Student program which contributes to the elimination of poverty and social problems; and/or provides direct services to disadvantaged groups.',
        improve_your_chances: 'Innovation-as a response to the needs of the target population, uniqueness, professional services that address unmet needs, provide direct service',

        links: {
            guidelines: 'https://usac.ucla.edu/docs/funding_guidelines_csmini.doc',
            application: 'https://www.usacfunds.ucla.edu/fundapp/csmini/'
        },

        tags: {
            fund_amount: '$3500 per quarter',
            deadline: 2, 
            cause: [5],               
        }
    },
    {
        id: 5,
        fund_org: 'Student Initiated Outreach Committee (SIOC)',
        fund_name: 'Mini Fund',
        deadline: 'Fixed per quarter, exact date varies depending on quarter.',
        eligibility: {
            individual: false,
            group: true
        },
        contact: 'siocminifund@cpo.ucla.edu',
        about: 'A supplemental funding source for student-initiated, student-run community service projects and UCLA student sponsoring organizations who perform outreach functions.',
        improve_your_chances: 'The program or service to be implemented must be directly correlated towards increasing the academic competitiveness of socio-economically/educationally disadvantaged students and underrepresented communities towards eligibility or attendance to the University of California or other institutions of higher learning.',
        links: {
            guidelines: 'https://usac.ucla.edu/docs/sioc_guidelines.pdf',
            application: 'https://usac.ucla.edu/docs/sioc_application.pdf'
        },

        tags: {
            fund_amount: 'Funding varies',
            deadline: 2, 
            cause: [5],               
        }
    },
    {
        id: 6,
        fund_org: '',
        fund_name: 'Contingency Capital Items Fund',
        deadline: '3 Weeks prior to purchase',
        eligibility: {
            individual: false,
            group: true
        },
        contact: 'usaficom@asucla.ucla.edu',
        about: 'Fund given to USAC office/commission or a student group with an office in Kerckhoff to cover cost of technology and furniture items.',
        improve_your_chances: 'Consider the type of tech/furniture you are requesting. Computers, cabinents, desks, will be funded. Laptops, microwaves, etc. won’t.',

        links: {
            guidelines: '',
            application: 'https://forms.gle/ULKcpN9rHnikCGEg7'
        },

        tags: {
            fund_amount: 'Funding varies',
            deadline: 1, 
            cause: [6],               
        }
    },
    {
        id: 7,
        fund_org: '',
        fund_name: 'Contingency Programming Fund',
        deadline: '3 weeks prior to proposed program date.',
        eligibility: {
            individual: false,
            group: true
        },
        contact: 'usaficom@asucla.ucla.edu',
        about: 'Helps student organizations fund activities and events which are desirable to the general interest of the UCLA Undergraduate Student Body.',
        improve_your_chances: 'Food, retreats, parking, etc. will be funded.',

        links: {
            guidelines: 'https://usac.ucla.edu/docs/Finance%20Committee%20Guidelines.pdf',
            application: 'https://forms.gle/oDGgrup8CJWL9ZJz8'
        },

        tags: {
            fund_amount: 'Funding varies',
            deadline: 1, 
            cause: [6],               
        }
    },
    {
        id: 8,
        fund_org: '',
        fund_name: 'Student Wellness Programming Fund',
        deadline: '2 Mondays prior to proposed program date.',
        eligibility: {
            individual: false,
            group: true
        },
        contact: 'usaaac@asucla.ucla.edu',
        about: 'Help funds event organizing and supply costs for health-related events on-campus.',
        improve_your_chances: 'Student orgs may apply mulitiple times, as long as each application is for a different event.',

        links: {
            guidelines: '',
            application: 'https://forms.gle/FvyfQKMd9rn2jiVk9'
        },

        tags: {
            fund_amount: '$750 per quarter',
            deadline: 1, 
            cause: [6],               
        }
    },
    {
        id: 9,
        fund_org: '',
        fund_name: 'Supplemental Fund for Service (SFS)',
        deadline: '4 Weeks (for conferences) 2 Weeks (for programs and other funding needs)',
        eligibility: {
            individual: true,
            group: true
        },
        contact: 'sfs@uclacsc.org',
        about: 'Provide UCLA undergraduate students affiliated with a service project on-campus and UCLA student organizations the opportunity to pursue their service initiatives.',
        improve_your_chances: 'Recipients of service include: UCLA students, Non-UCLA students, Non-human recipients (ex. Animals, Environment).',

        links: {
            guidelines: 'https://docs.google.com/document/d/1F9vXnHMqfgHp8YLWsZG_ES0Uqf4Bzg3esHPmvOdRSVE/edit?usp=sharing',
            application: 'https://docs.google.com/document/d/1_-epDWMmKbRfGkGf1H7xphEjvghWHUYXIXKU3ZTlloY/edit'
        },

        tags: {
            fund_amount: '$3,250 per quarter',
            deadline: 2, 
            cause: [2],               
        }
    },
    {
        id: 10,
        fund_org: 'TGIF (The Green Initiative Fund) Grant Application',
        fund_name: 'Main Fund',
        deadline: 'Fall: October 11, Winter: January 17 Spring: April 10',
        eligibility: {
            individual: true,
            group: true
        },
        contact: 'TGIF@asucla.ucla.edu',
        about: 'Projects/events that promote sustainability within the community',
        improve_your_chances: 'Consider using sustainable materials at your events, such as compostable utensils, resuable tote bags, etc.',

        links: {
            guidelines: 'https://tgif.ucla.edu/getfunding.php',
            application: 'https://www.cognitoforms.com/ASUCLASGA/TGIFMainFundApplication20192020'
        },

        tags: {
            fund_amount: '$10,000 per quarter',
            deadline: 2, 
            cause: [4],               
        }
    },
    {
        id: 11,
        fund_org: 'TGIF (The Green Initiative Fund) Grant Application',
        fund_name: 'Mini Fund',
        deadline: 'Fridays of Week 2, 4, 6, 8',
        eligibility: {
            individual: true,
            group: true
        },
        contact: 'TGIF@asucla.ucla.edu',
        about: 'Projects/events that promote sustainability within the community',
        improve_your_chances: 'Consider using sustainable materials at your events, such as compostable utensils, resuable tote bags, etc.',

        links: {
            guidelines: 'https://tgif.ucla.edu/getfunding.php',
            application: 'https://www.cognitoforms.com/ASUCLASGA/TGIFMiniFundApplication20192020'
        },

        tags: {
            fund_amount: '$500 per quarter',
            deadline: 2, 
            cause: [4],               
        }
    },
    {
        id: 12,
        fund_org: '',
        fund_name: 'USA/BOD ASUCLA Programming Fund',
        deadline: 'Fall: October 8, 2019 Winter: November 5, 2019 Spring: February 18, 2020',
        eligibility: {
            individual: false,
            group: true
        },
        contact: 'usabudgetreview@gmail.com',
        about: 'Fund to help programming costs of events organized and hosted by officially registered student organizations.',
        improve_your_chances: 'Apply for funding towards advertising or graphics, facilities or equipment rentals, food, honoraria, props or costumes.',

        links: {
            guidelines: 'https://usac.ucla.edu/docs/bod_guidelines.pdf',
            application: 'https://usac.ucla.edu/docs/bod_guidelines.pdf'
        },

        tags: {
            fund_amount: '$50,000 per quarter',
            deadline: 2, 
            cause: [6],               
        }
    },
]
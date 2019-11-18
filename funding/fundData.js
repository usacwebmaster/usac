
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
            guidlines: 'google.com',
            application: 'google.com'
        },

        tags: {
            fund_amount: '$2000 per quarter',
            deadline: 1, 
            cause: 2,               
 
        }
    },
    {
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
            guidlines: 'google.com',
            application: 'google.com'
        },

        tags: {
            fund_amount: '$500 per quarter',
            deadline: 1, 
            cause: 2,               
 
        }
    }
]
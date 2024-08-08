// key -- hubspots keys
// value --- verity keys

const hubToVerityformkeys = {
    firstname:'fname',
    lastname:'lname',
    email:'email',
    phone:'phone',
    major_:"major",
    select_gender:"select_gender",
    ethnicity:"ethnicity",
    year_of_study:"year_of_study",
    opportunity_of_interest:"OpportunitiesofInterest",
    select_course:"SelectCourse",
    is_there_an_additional_course_you_would_be_interested_in_:'Isthereanadditionalcourseyouwouldbeinterestedin',
    please_choose_the_devices_you_have_access_to:'Pleasechoosethedevicesyouhaveaccesstoo',
    what_attracts_you_to_these_courses__and_how_do_they_align_with_your_academic_or_career_goals_:'Whatattractsyoutothesecoursesandhowdotheyalign withyouracademicorcareergoals',
    each_course_requires_an_estimated_2_4_hours_per_week__how_do_you_plan_to_balance_this_with_your_cur:'Eachcourserequiresanestimated24hoursperweek',
    what_are_the_main_goals_or_outcomes_you_hope_to_achieve_by_completing_these_micro_credential_course:'Whatarethemaingoalsoroutcomesyouhopetoachieveby completingthesemicrocredentialcourses',
    are_there_any_potential_challenges_or_obstacles_you_foresee_in_completing_this_micro_credential_cou:'Arethereanypotentialchallengesorobstaclesyouforesee incompletingcourse',
    on_a_scale_of_1_10__how_committed_are_you_to_completing_the_micro_credential_courses_:'Onascaleof110howcommittedareyoutocompletingthemicrocredentialcourses'
}

const hubSpotToVerityProgramValues = [
    {
        // course:'Harnessing the Power of AI: Enhancing Community AI/ML in Real-Life',
        verityCourseValue:"Harnessing the Power of AI: Enhancing Community AI/ML in Real Life",
        course:'Harnessing the Power of AI: Enhancing Community AI/ML in Real-Life',
        program:'Culturally Responsive Artificial Intelligence and Machine Learning',
        campaignType:'AIML'
    },
    {
        course:'How Does AIML Impact Culture',
        verityCourseValue:"How Does AI Impact Culture?",
        program:'Culturally Responsive Artificial Intelligence and Machine Learning',
        campaignType:'AIML'
    },
    {
        // course:'Pocket to Production: Creating Content from the Streets to the Studio',
        course:'Pocket to Production: Creating Content from the Street to the Studio',
        verityCourseValue:"Pocket to Production: Creating Content from the Streets to the Studio",
        program:'Arts & Entertainment: Culture Creatives',
        campaignType:'Arts and Entertainment'
    },
    {
        // course:'Film and Television Modern-Day Griots: Content Creators for the Film and Television Industry',
        course:'AE 200',
        verityCourseValue:"Film and Television Modern Day Griots: Content Creators for the Film and Te",
        program:'Arts & Entertainment: Culture Creatives',
        campaignType:'Arts and Entertainment'
    },
    {
        course:'Socially Just Coding: Develop in Swift Explorations Part 1',
        verityCourseValue:"Socially Just Coding: Develop in Swift Explorations Pt.1",
        program:'Coding for the Culture: Swift Coding and App Development',
        campaignType:'SJC'
    },
    {
        course:'Socially Just Coding: Develop in Swift Explorations Part 2',
        verityCourseValue:"Socially Just Coding: Develop in Swift Explorations Pt. 2",
        program:'Coding for the Culture: Swift Coding and App Development',
        campaignType:'SJC'
    },
    {
        course:"Discovering Your Professional Superpowers (FALL '23)",
        verityCourseValue:"Discovering Your Professional Superpowers",
        program:'Professional Development for Social Mobility',
        campaignType:'Discovering Superpowers'
    },
    {
        course:'DYPS 3',
        verityCourseValue:"Synthesizing Superpowers: Leading and Thriving on Diverse Teams",
        program:'Professional Development for Social Mobility',
        campaignType:'Synthesizing Superpowers'
    },
    {
        course:"The Art of Storytelling: Screenwriting for the Culture (FALL '23)",
        verityCourseValue:"The Art of Storytelling: Screenwriting for the Culture",
        program:'Propel Learn Signature Courses',
        campaignType:'Art of Storytelling'
    },
    //new courses
    //need program values for new courses
    {
        course:"Socially Just Coding: Develop in Swift Explorations Pt. 3",
        verityCourseValue:"Socially Just Coding: Develop in Swift Explorations Pt. 3",
        // program:'Propel Learn Signature Courses',
        campaignType:'SJC'
    },
    {
        course:"Applying AI to your own problems and interests",
        verityCourseValue:"Applying AI to your own problems and interests",
        // program:'Propel Learn Signature Courses',
        campaignType:'AIML'
    },
    {
        course:"Podcast Like a Pro: Choosing Your Own Lane as Media Entrepreneur",
        verityCourseValue:"Podcast Like a Pro: Choosing Your Own Lane as Media Entrepreneur",
        // program:'Propel Learn Signature Courses',
        campaignType:'AOST'
    },
    {
        course:"Superpowers Unleashed: Productivity, Project Management, and Emerging Technologies",
        verityCourseValue:"Superpowers Unleashed: Productivity, Project Management, and Emerging Technologies",
        // program:'Propel Learn Signature Courses',
        campaignType:'DYPS 3'
    },
    {
        course:"Future Proof Entrepreneur",
        verityCourseValue:"Future Proof Entrepreneur",
        // program:'Propel Learn Signature Courses',
        campaignType:'ENTR'
    },

]

module.exports = {
    hubToVerityformkeys, hubSpotToVerityProgramValues
}
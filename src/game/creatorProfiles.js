
import profilePic from "../images/profile-placeholder.png";
import profileLeslie from '../images/leslie_profile_img.jpg'
import profileCelia from '../images/celia_profile_img.jpg'
import profileJabran from '../images/jabran_profile_img.jpg'
import profileAshley from '../images/ashley_profile_img.jpg'
import profileKevin from '../images/kevin_profile_img.jpg'
import profileJordan from '../images/jordan_profile_img.jpg'
import profileLaney from "../images/profile_laney.jpg";
import profileXavier from "../images/profile_xavier.jpeg";
import profileEmily from "../images/profile_emily.png";


export const bioFiller = () => {
    return (
        <>
            {<p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                It waspopularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>}
        </>
    )
}

export const bioLeslie = () => {
    return (
        <>
            {<p>
                Leslie Robinson is a therapist, keynote speaker, workshop facilitator, and the Founder and CEO of Trance4mation Games, a Company formed to transform and to heal relationships and lives through engaging and profound dialogue. 
                Leslie spent 30 years working in diverse capacities within underserved communities, and she proudly served as a Department of Defense Reintegration Speaker nationwide during the drawdown from Afghanistan. 
                In 2009, Leslie founded Trance4mation Games, the overall Company for her Keep It Real Inclusion game utilized in over 1,000 Colleges, RECHARGE Re-entry and long-sentence games utilized in over 200 prisons and jails, Warrior Spirit Veteran Reintegration Games, 
                STREETS, a board game which addresses the gang and street lifestyles, and In the Line of Duty, a Police dialogue game to assist Law Enforcement in processing their experiences; all games utilized nationwide. <br/>
                <br/>
                Leslie developed a <span style={{color:'red'}}>FREE</span> site of online mini-games at <a href="https://www.Healgames.love">www.Healgames.love</a> for everyone to play with friends, family and co-workers. All of these Restorative Communication games provide safe, structured spaces to experience understanding, empathy, healing and LOVE! 
                Leslie is enormously proud of and grateful for the Keep It Real Creators Team! And is incredibly excited to launch Keep It Real 100 into our World!
            </p>}
        </>
    )
}

export const bioCelia = () => {
    return (
        <>
            {<p>
                Celia Brown is an African American woman and long time activist in the psychiatric survivor movement. She was instrumental in developing the peer specialist civil service title in the country, and the first Peer Specialist in New York State. Celia is the Regional Advocacy Specialist at the New York City Field Office, New York State Office of Mental Health. 
                She provides technical assistance and support to people with psychiatric disabilities and their families. Celia facilitates trainings on peer support, self-care and wellness approaches.
                She earned her NYS Peer Certification. Celia is the founder of Surviving Race: The Intersection of Injustice, Disability and Human Rights, She is a member of the Healing and Hip Hop team, and uses her experiences in recovery through music.  
                Celia is a Keep It Real 100 Creator for a virtual game to support Black, Indigenous, People of Color - Youth and allies with mental health, addiction, and other issues. 
            </p>}
        </>
    )
}

export const bioJordan = () => {
    return (
        <>
            {<p>
                Jordan Mayo is a Sophomore at Lehman College, attaining her BA in Theatre. She is passionate about the arts, social activism and the communities she belongs to. Jordan is an Afro-Latino activist whose main goal in life is to uplift her community and those in need. 
                She is also proud to be a Keep It Real 100 Game Creator! Jordan developed four of the 16 Categories in this game! 
            </p>}
        </>
    )
}

export const bioAshley = () => {
    return (
        <>
            {<p>
                Ashley Halsey is a free spirited but organized entrepreneur who enjoys projects that spark her creative side and business savvy skills. 
                Ashley graduated with a Bachelor of Arts degree in Television and Film and is currently the co-founder of Climb to Clarity, LLC at <a href="https://www.climbtoclarity.com">www.climbtoclarity.com</a> where she primarily coaches women and helps them find true freedom from codependent patterns by breaking down limiting beliefs and negative emotions on the unconscious level. 
                Ashley is one of the creators of Keep it Real 100 and is a black woman living in today's America which ultimately drove her to be a part of this amazing project. 
                Due to her shared experiences of the BIPOC community she is able to bring a fresh youthful perspective and hopes to create generational freedom and a way to connect all races, ethnicities and sexual orientations so that we can grow in accepting each other even if we share different views.

            </p>}
        </>
    )
}

export const bioJabran = () => {
    return (
        <>
            {<p>
                Jabran Brown is a 24 year old African American man. Jabran lives in Queens, New York and attends  Queensborough Community College. Jabran helped to create Keep it Real 100. He focused particularly on the music category because music has always played an important role in his life. 
                Jabran has always felt music is a great way to connect with emotions, and to work through problems. Jabran hopes Keep it Real 100 will do that, and more for the BIPOC community around the world.
            </p>}
        </>
    )
}

export const bioKevin = () => {
    return (
        <>
            {<p>
                Kevin Waller is a 26 year old African American young man. Kevin graduated from the University of Bridgeport with a Bachelor's Degree in Business Administration. Kevin is following in the footsteps of his Grandfather as an entrepreneur, and is working on developing his own business. Kevin is a Keep It Real 100 Creator. 
                He has always felt music is a great way to connect with his life, people and the world. Kevin is so proud to have helped with the music category in Keep it Real 100, and hopes it will support the BIPOC community. 
            </p>}
        </>
    )
}


export const bioEmily = () => {
    return (
        <>
            {<p>
                Emily is an unassuming rockstar.  Driven to seek out and overcome challenges that others would simply not try.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                It waspopularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>}
        </>
    )
}

export const creatorProfiles = [
    
    {
        profileImg: profileLeslie,
        personName: "Leslie Robinson",
        proTitle: "Professional Title",
        bio: bioLeslie(),
        id:1
    },
    {
        profileImg: profileCelia,
        personName: "Celia Brown",
        proTitle: "Professional Title",
        bio: bioCelia(),
        id:2
    },
    {
        profileImg: profileJordan,
        personName: "Jordan Mayo",
        proTitle: "Professional Title",
        bio: bioJordan(),
        id:3

    },
    {
        profileImg: profileAshley,
        personName: "Ashley Halsey",
        proTitle: "Professional Title",
        bio: bioAshley(),
        id:4
    },
    {
        profileImg: profileJabran,
        personName: "Jabran Brown",
        proTitle: "Professional Title",
        bio: bioJabran(),
        id:5
    },
    {
        profileImg: profileKevin,
        personName: "Kevin Waller",
        proTitle: "Professional Title",
        bio: bioKevin(),
        id:5
    },
    {
        profileImg: profileLaney,
        personName: "Laney",
        proTitle: "Professional Title",
        bio: bioFiller(),
        id:5
    },
    {
        profileImg: profileEmily,
        personName: "Emily",
        proTitle: "Professional Title",
        bio: bioEmily(),
        id:3
    },
    {
        profileImg: profilePic,
        personName: "Rixio",
        proTitle: "Professional Title",
        bio: bioFiller(),
        id:4
    },
    {
        profileImg: profileXavier,
        personName: "Xavier",
        proTitle: "Professional Title",
        bio: bioFiller(),
        id:5
    },
]




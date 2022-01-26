import React from 'react'
import CreatorBio from './CreatorBio'
import {creatorProfiles, bioLeslie} from '../game/creatorProfiles'



export default function Bio() {

    

console.log(creatorProfiles)



    return (
        <div>
            {creatorProfiles.map((profile, index) => (
                    <CreatorBio
                        profile
                        key={index}
                        profileImg={profile.profileImg}
                        personName={profile.personName}
                        proTitle={profile.proTitle}
                        bio={profile.bio}
                        id={profile.id}
                    />
            ))}
        </div>
    )
}
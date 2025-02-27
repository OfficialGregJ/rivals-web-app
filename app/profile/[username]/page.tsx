/* 
Need to figure out how to pass through the username to the route
From the route, how to bring the data back to this page

*/

import dataReqs from '@/utils/dataReqs';
import { PlayerData } from '@/lib/interfaces'

export default async function Page({
    params,
}: {
    params: { username: string }
}) {
    

    // TODO: Add informational screen for when a user doesn't exist
    const user = await params
    const getUUID = await dataReqs('https://mrapi.org/api/player-id/' + user.username).then((x) => x.id);

    const getUserInfo: PlayerData = await dataReqs('https://mrapi.org/api/player/' + getUUID)

    if(!getUserInfo.is_profile_private) {
        return (
            <p>{ JSON.stringify(getUserInfo) }</p>
        )
    } else {
        return (
            <p>this profile is private !</p>
        )
    }
}
/* 
TODO: stick w/ caching or figure out how to store history; how far does history go?
DB necessary?

*/

/* Need avatars (grab rivals card from api?)
    - avatars (grab rivals card from api?)
    - table (format the games)
    - select (choose szn)
    - tabs (select game mode)
    - chart (rank increase/decrease)
*/

import dataReqs from '@/utils/dataReqs';
import { PlayerData, PfpData } from '@/utils/interfaces'

// https://ui.shadcn.com/docs/components/avatar
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

// https://ui.shadcn.com/docs/components/data-table
import { columns } from "./columns";
import { DataTable } from "./data-table";

// https://ui.shadcn.com/docs/components/select
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
  
// https://ui.shadcn.com/docs/components/tabs
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default async function Page({
    params,
}: {
    params: { username: string }
}) {
    

    // TODO: Add informational screen for when a user doesn't exist
    const user = await params
    const getUUID = await dataReqs('https://mrapi.org/api/player-id/' + user.username).then((x) => x.id);
    const getUserInfo: PlayerData = await dataReqs('https://mrapi.org/api/player/' + getUUID)

    const matchHistory = getUserInfo.match_history;
    const username = getUserInfo.player_name;
    const stats = getUserInfo.stats;
    const heroStats = getUserInfo.hero_stats;
    const mapStats = getUserInfo.maps;

    // Get item by id...
    const rivalspfp: PfpData = await dataReqs('https://mrapi.org/api/item/' + getUserInfo.player_icon_id);
    const rivalspfp_link = rivalspfp.icon;


    if(!getUserInfo.is_profile_private) {
        return (
            <div>
                {/* Rivals PFP & username */}
                <Avatar>
                    <AvatarImage src={rivalspfp_link} />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h1>{username}</h1>

                {/* Season Selector */}
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="All Seasons" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="3">Season 1.5</SelectItem>
                        <SelectItem value="2">Season 1</SelectItem>
                        <SelectItem value="1">Season 0</SelectItem>
                    </SelectContent>
                </Select>

                {/* TODO - add map, mode, character pic/name */}
                {/* Match Table */}
                <div className="container mx-auto py-10">
                    <DataTable columns={columns} data={matchHistory} />
                </div>

                <p>{ JSON.stringify(getUserInfo) }</p>
            </div>

        )
    } else {
        return (
            <p>this profile is private !</p>
        )
    }
}
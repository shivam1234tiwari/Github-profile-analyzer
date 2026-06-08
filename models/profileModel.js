const db = require("../config/db");

const saveProfile = (profile)=>{

    const sql = `
    INSERT INTO profiles
    (
    username,
    name,
    bio,
    public_repos,
    followers,
    following,
    public_gists,
    account_age_days,
    profile_url
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    ON DUPLICATE KEY UPDATE
    name=VALUES(name),
    bio=VALUES(bio),
    public_repos=VALUES(public_repos),
    followers=VALUES(followers),
    following=VALUES(following),
    public_gists=VALUES(public_gists),
    account_age_days=VALUES(account_age_days),
    profile_url=VALUES(profile_url)
    `;

    db.query(sql,[
        profile.username,
        profile.name,
        profile.bio,
        profile.public_repos,
        profile.followers,
        profile.following,
        profile.public_gists,
        profile.account_age_days,
        profile.profile_url
    ]);
}

const getAllProfiles = ()=>{

    return new Promise((resolve,reject)=>{

        db.query(
            "SELECT * FROM profiles",
            (err,result)=>{
                if(err) reject(err);
                resolve(result);
            }
        )
    })
}

const getSingleProfile = (username)=>{

    return new Promise((resolve,reject)=>{

        db.query(
            "SELECT * FROM profiles WHERE username=?",
            [username],
            (err,result)=>{
                if(err) reject(err);
                resolve(result);
            }
        )
    })
}

module.exports={
    saveProfile,
    getAllProfiles,
    getSingleProfile
}
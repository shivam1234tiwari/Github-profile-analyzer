const fetchGithubProfile = require("../services/githubService");

const {
  saveProfile,
  getAllProfiles,
  getSingleProfile,
} = require("../models/profileModel");

const analyzeProfile = async (req, res) => {
  try {
    const { username } = req.params;

    const data = await fetchGithubProfile(username);

    const createdDate = new Date(data.created_at);

    const today = new Date();

    const accountAgeDays = Math.floor(
      (today - createdDate) / (1000 * 60 * 60 * 24),
    );

    const profile = {
      username: data.login,
      name: data.name,
      bio: data.bio,
      public_repos: data.public_repos,
      followers: data.followers,
      following: data.following,
      public_gists: data.public_gists,
      account_age_days: accountAgeDays,
      profile_url: data.html_url,
    };

    saveProfile(profile);

    res.status(200).json({
      success: true,
      profile,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const fetchProfiles = async (req, res) => {
  try {
    const profiles = await getAllProfiles();

    res.json(profiles);
  } catch (error) {
    res.status(500).json(error);
  }
};

const fetchSingleProfile = async (req, res) => {
  try {
    const profile = await getSingleProfile(req.params.username);

    res.json(profile);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  analyzeProfile,
  fetchProfiles,
  fetchSingleProfile,
};

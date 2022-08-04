module.exports = {
  tenants: [
    {
      name: "modernwalk",
      domains: [
        {
          development: /[a-z]*\.modernwalk\.com/,
          stage: "stage.modernwalk.com",
          production:
            /[a-z]*\.modernwalkmultitenant-env\.eba-wp83tjsx.us-west-2\.elasticbeanstalk\.com/, // Regex supported!
        },
      ],
    },
  ],
};

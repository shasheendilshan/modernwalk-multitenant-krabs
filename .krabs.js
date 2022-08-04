module.exports = {
  tenants: [
    {
      name: "modernwalk",
      domains: [
        {
          development: /[a-z]*\.modernwalk\.com/,
          stage: "stage.modernwalk.com",
          production: /[a-z]*\.modernwalk-krab\.herokuapp\.com/, // Regex supported!
        },
      ],
    },
  ],
};

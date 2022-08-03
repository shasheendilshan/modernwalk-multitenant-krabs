export const tenants = {
  tenants: [
    {
      name: "Modern Walk",
      domains: [
        {
          development: "local.abc.com",
          stage: "stage.abc.com",
          production: "pqr.com",
        },
      ],
    },
    {
      name: "Rare Beauty",
      domains: [
        {
          development: "local.pqr.com",
          stage: "stage.pqr.com",
          production: /[\w|\d|-|_]+\.pqr.com/, // Regex supported!
        },
      ],
    },
  ],
};

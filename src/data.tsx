export const dummyItem = [
  {
    key: "MenuItem1",
    content: "MenuHeader1",
    menu: {
      items: [
        {
          key: "subMenuItem1",
          content: "Sub Menu Item 1",
          menu: {
            items: [
              {
                key: "sub1.1",
                content: "This is some Content",
              },
              {
                key: "sub1.2",
                content: "Hello Universe this is some content",
              },
            ],
          },
        },
        {
          key: "subMenuItem2",
          content: "Sub Menu Item 2",
          menu: {
            items: [
              {
                key: "sub2.1",
                content: "Sub sub child 1",
                menu: {
                  items: [
                    {
                      key: "sub2.1.1",
                      content: "sub sub sub child 2",
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          key: "subMenuItem3",
          content: "Sub Menu Item 3",
        },
      ],
    },
  },
  {
    key: "menuItem2",
    content: "MenuHeader2",
    menu: {
      items: [
        {
          key: "subMenu1.1",
          content: "Card content",
          menu: {
            items: [
              {
                key: "sub1.1.1",
                content: "Hello world this is some content ",
              },
              {
                key: "sub1.1.2",
                content: "This is some card content",
              },
            ],
          },
        },
        {
          key: "sub1.2.1",
          content: "Sub Menu Item 2",
        },
      ],
    },
  },
  {
    key: "menuItem3",
    content: "MenuHeader3",
    menu: {
      items: [
        {
          key: "submenuItem3",
          content: "This is some content",
          menu: {
            items: [
              {
                key: "submenuItem3.2",
                content: "My Information",
              },
              {
                key: "submenuItem3.3",
                content: "My Contact",
              },
            ],
          },
        },
        {
          key: "submenuItem3.3.1",
          content: "Sub Menu Item 2",
        },
        {
          key: "submenuItem3.3.2",
          content: "Sub Menu Item 3",
        },
        {
          key: "submenuItem3.3.3",
          content: "Sub Menu Item 3",
        },
      ],
    },
  },
];

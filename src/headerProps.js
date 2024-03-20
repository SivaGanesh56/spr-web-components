export default {
  mainLogoCta: {
    name: "Sprinklr Logo",
    label: "Sprinklr Logo",
    url: "/",
    action: "NAVIGATE",
  },
  primaryCta: {
    contentType: "refreshCta",
    id: "4a8HaHdm5vvUQpiMVFcvos",
    name: "Header - Demo",
    type: "BUTTON",
    label: "Demo",
    url: "/demo/",
    action: "NAVIGATE",
    variant: "primary",
    size: "lg",
    isOpenNewTab: false,
  },
  loginCta: {
    contentType: "refreshCta",
    id: "44wxoessCg23p4ejC2LVxI",
    name: "Header - Login",
    type: "LINK",
    label: "Login",
    url: "https://app.sprinklr.com/ui/app-redirect",
    action: "NAVIGATE",
    variant: "primary",
    size: "lg",
    isOpenNewTab: false,
  },
  supportCta: {
    contentType: "refreshCta",
    id: "5soxD6Oqzdf37TLzrQ4pno",
    name: "Header - Support",
    type: "BUTTON",
    label: "Support",
    url: "/help",
    action: "NAVIGATE",
    variant: "primary",
    size: "lg",
    isOpenNewTab: false,
  },
  secondaryCta: {
    contentType: "refreshCta",
    id: "42tF5Dv0kNR30M5Ti62VS4",
    name: "Header - Pricing",
    type: "LINK",
    label: "Pricing",
    url: "/pricing/customer-service/",
    action: "NAVIGATE",
    variant: "primary",
    size: "lg",
    isOpenNewTab: false,
  },
  auxCta: {
    contentType: "refreshCta",
    id: "5BbPWnypEszJ1g0hiiIOw4",
    name: "Header - Free Trial",
    type: "BUTTON",
    label: "Free Trial",
    url: "https://lite.sprinklr.com/signup",
    action: "NAVIGATE",
    variant: "primary",
    size: "lg",
    isOpenNewTab: false,
  },
  navItems: [
    {
      type: "MEGA_MENU",
      label: "Products",
      sections: [
        {
          type: "SUB_MENU",
          title: "Enterprise Offerings",
          items: [
            {
              contentType: "refreshMegaMenuSubNavItem",
              id: "622KogHESxmgihlFZlN4pb",
              label: "Sprinklr Service",
              title: "Sprinklr Service",
              description:
                "Deliver a unified customer experience across voice, social and digital",
              titleIcon: "service",
              highlight: {
                title: "Sprinklr Service highlight",
                image: {
                  contentType: "refreshImage",
                  id: "vWHUeDIDicAXdvK2sJKI8",
                  title:
                    "Named as a Challenger: 2023 Gartner® Magic Quadrant™ for Enterprise Conversational AI Platforms",
                  defaultAsset: {
                    contentType: null,
                    id: "5liiHl8t1gUKVfTkvGGhXv",
                    title:
                      "Named as a Challenger: 2023 Gartner® Magic Quadrant™ for Enterprise Conversational AI Platforms",
                    description: "",
                    file: {
                      url: "//images.ctfassets.net/ukazlt65o6hl/5liiHl8t1gUKVfTkvGGhXv/413714458d679298438f0b3404b47c9a/Gartner-_Sprinklr.png",
                      details: {
                        size: 58191,
                        image: { width: 1392, height: 1050 },
                      },
                      fileName: "Gartner-_Sprinklr.png",
                      contentType: "image/png",
                    },
                  },
                },
                cta: {
                  contentType: "refreshCta",
                  id: "5WO3LfPGQLJkRVESH2eXC0",
                  name: "CTA gartner highlight",
                  type: "BUTTON",
                  label: "Learn More",
                  url: "/gartner-conversational-ai-2023/",
                  action: "NAVIGATE",
                  variant: "primary",
                  size: "lg",
                  isOpenNewTab: false,
                },
                description:
                  "Named as a Challenger: 2023 Gartner® Magic Quadrant™ for Enterprise Conversational AI Platforms",
                isUpcomingReport: false,
              },
              overviewCta: {
                label: "Overview",
                url: "/products/customer-service",
                action: "NAVIGATE",
                type: "LINK",
              },
              links: [
                {
                  contentType: "refreshNavLink",
                  id: "47CkgAYD9SctifTTl8XOAM",
                  title: "Inbound Voice",
                  description:
                    "Simplify voice with hassle-free calls and empower your agents to provide delightful service",
                  url: "/products/customer-service/inbound-voice",
                  cta: {
                    label: "Inbound Voice",
                    url: "/products/customer-service/inbound-voice",
                    type: "LINK",
                    action: "NAVIGATE",
                  },
                },
                {
                  contentType: "refreshNavLink",
                  id: "7tQuezoxmMnPWKJ38F0BXy",
                  title: "Outbound Voice",
                  description:
                    "Increase connect rates and campaign productivity with AI-powered dialers",
                  url: "/products/customer-service/outbound-voice/",
                  cta: {
                    label: "Outbound Voice",
                    url: "/products/customer-service/outbound-voice/",
                    type: "LINK",
                    action: "NAVIGATE",
                  },
                },
                {
                  contentType: "refreshNavLink",
                  id: "3DIjBJELJhkqnRhNATJreT",
                  title: "Social Customer Service",
                  description:
                    "Scale customer service across 15+ social channels",
                  url: "/products/customer-service/social-media-channels/",
                  cta: {
                    label: "Social Customer Service",
                    url: "/products/customer-service/social-media-channels/",
                    type: "LINK",
                    action: "NAVIGATE",
                  },
                },
                {
                  contentType: "refreshNavLink",
                  id: "1BUNCEFbSTv1JYOpPYN9m1",
                  title: "Live Chat Support",
                  description:
                    "Deliver prompt customer service and increase sales across all digital channels",
                  url: "/products/customer-service/livechat/",
                  cta: {
                    label: "Live Chat Support",
                    url: "/products/customer-service/livechat/",
                    type: "LINK",
                    action: "NAVIGATE",
                  },
                },
                {
                  contentType: "refreshNavLink",
                  id: "4lSZmdgXewLOIVwSKQRH4C",
                  title: "Communities",
                  description:
                    "Empower customers to engage, self-serve, collaborate, and educate one other",
                  url: "/products/customer-service/community-forum/",
                  cta: {
                    label: "Communities",
                    url: "/products/customer-service/community-forum/",
                    type: "LINK",
                    action: "NAVIGATE",
                  },
                },
                {
                  contentType: "refreshNavLink",
                  id: "7vccscbMFBYlOYKy6l6qbe",
                  title: "Conversational AI Platform",
                  description:
                    "Drive sales, self-service and support with scalable Generative AI-powered bots",
                  url: "/products/customer-service/conversational-ai/",
                  cta: {
                    label: "Conversational AI Platform",
                    url: "/products/customer-service/conversational-ai/",
                    type: "LINK",
                    action: "NAVIGATE",
                  },
                },
                {
                  contentType: "refreshNavLink",
                  id: "6Po96LBELpnrRmQq5habxc",
                  title: "Conversational IVR",
                  description:
                    "Enable self-serve with voice bots and route complex issues to live agents",
                  url: "/products/customer-service/conversational-ivr/",
                  cta: {
                    label: "Conversational IVR",
                    url: "/products/customer-service/conversational-ivr/",
                    type: "LINK",
                    action: "NAVIGATE",
                  },
                },
                {
                  contentType: "refreshNavLink",
                  id: "73hTR1CwUPyw7IBD5lniSc",
                  title: "Knowledge Base Software",
                  description:
                    "Provide agents and customers ready-to-use answers and recommendations",
                  url: "/products/customer-service/knowledge-base/",
                  cta: {
                    label: "Knowledge Base Software",
                    url: "/products/customer-service/knowledge-base/",
                    type: "LINK",
                    action: "NAVIGATE",
                  },
                },
                {
                  contentType: "refreshNavLink",
                  id: "2J1KgXRFPOcvQ8bRTzoEZp",
                  title: "Unified Agent Desktop",
                  description:
                    "Access customer 360° profiles, conversation history,  KB articles and more — all in one screen",
                  url: "/products/customer-service/agent-console/",
                  cta: {
                    label: "Unified Agent Desktop",
                    url: "/products/customer-service/agent-console/",
                    type: "LINK",
                    action: "NAVIGATE",
                  },
                },
                {
                  contentType: "refreshNavLink",
                  id: "8VnzuGq8d628E3tOeKVVn",
                  title: "Agent Assist",
                  description:
                    "Leverage AI to guide agents and automate workflows",
                  url: "/products/customer-service/agent-assist/",
                  cta: {
                    label: "Agent Assist",
                    url: "/products/customer-service/agent-assist/",
                    type: "LINK",
                    action: "NAVIGATE",
                  },
                },
                {
                  contentType: "refreshNavLink",
                  id: "1lhuIttBGhNTw41NcGSR7x",
                  title: "Omnichannel Routing",
                  description:
                    "Set up AI-powered routing to connect customers with the right agents",
                  url: "/products/customer-service/omnichannel-routing/",
                  cta: {
                    label: "Omnichannel Routing",
                    url: "/products/customer-service/omnichannel-routing/",
                    type: "LINK",
                    action: "NAVIGATE",
                  },
                },
                {
                  contentType: "refreshNavLink",
                  id: "3k79jcalZqSQwaCmdlE8ae",
                  title: "AI-Powered Quality Management",
                  description:
                    "Ensure quality, compliance and drive personalized agent coaching",
                  url: "/products/customer-service/quality-management/",
                  cta: {
                    label: "AI-Powered Quality Management",
                    url: "/products/customer-service/quality-management/",
                    type: "LINK",
                    action: "NAVIGATE",
                  },
                },
                {
                  contentType: "refreshNavLink",
                  id: "5YaKiV6rCiIjw2QolJiIOg",
                  title: "Supervisor Console",
                  description:
                    "Empower supervisors to make the right decisions and plan better",
                  url: "/products/customer-service/supervisor-console/",
                  cta: {
                    label: "Supervisor Console",
                    url: "/products/customer-service/supervisor-console/",
                    type: "LINK",
                    action: "NAVIGATE",
                  },
                },
                {
                  contentType: "refreshNavLink",
                  id: "6KaP9zsg1m8mBhHRShR6ju",
                  title: "Conversational Analytics",
                  description:
                    "Gain the deepest insights on 100% of customer conversations across channels",
                  url: "/products/customer-service/conversational-analytics/",
                  cta: {
                    label: "Conversational Analytics",
                    url: "/products/customer-service/conversational-analytics/",
                    type: "LINK",
                    action: "NAVIGATE",
                  },
                },
                {
                  contentType: "refreshNavLink",
                  id: "2KClI71ng8AriStMAqjANU",
                  title: "Workforce Management",
                  description:
                    "Drive efficient contact center planning for better productivity and agent utilization",
                  url: "/products/customer-service/workforce-management/",
                  cta: {
                    label: "Workforce Management",
                    url: "/products/customer-service/workforce-management/",
                    type: "LINK",
                    action: "NAVIGATE",
                  },
                },
                {
                  contentType: "refreshNavLink",
                  id: "6Bzp6CJaZ6PHVRQJW8S6fm",
                  title: "Reporting and Analytics",
                  description:
                    "Scale insights seamlessly to other functions of the organization with custom reports and dashboards",
                  url: "/products/customer-service/analytics-and-reporting/",
                  cta: {
                    label: "Reporting and Analytics",
                    url: "/products/customer-service/analytics-and-reporting/",
                    type: "LINK",
                    action: "NAVIGATE",
                  },
                },
                {
                  contentType: "refreshNavLink",
                  id: "3yldZLUodd6zWJ4FwH3H7G",
                  title: "Omnichannel Surveys",
                  description:
                    "Collect customer feedback with personalized surveys scalable across channels",
                  url: "/products/customer-service/omnichannel-survey/",
                  cta: {
                    label: "Omnichannel Surveys",
                    url: "/products/customer-service/omnichannel-survey/",
                    type: "LINK",
                    action: "NAVIGATE",
                  },
                },
                {
                  contentType: "refreshNavLink",
                  id: "1wPxdngCoVpDmJd3WxXapQ",
                  title: "Guided Workflows",
                  url: "/products/customer-service/guided-workflow/",
                  cta: {
                    label: "Guided Workflows",
                    url: "/products/customer-service/guided-workflow/",
                    type: "LINK",
                    action: "NAVIGATE",
                  },
                },
                {
                  contentType: "refreshNavLink",
                  id: "3i5AEdwmhbu9z91kilgv92",
                  title: "Service Command Center",
                  url: "/products/customer-service/service-command-center/",
                  cta: {
                    label: "Service Command Center",
                    url: "/products/customer-service/service-command-center/",
                    type: "LINK",
                    action: "NAVIGATE",
                  },
                },
              ],
            },
            {
              contentType: "refreshMegaMenuSubNavItem",
              id: "35UbRdZnrH7xq5w7BkHusf",
              label: "Sprinklr Social",
              title: "Sprinklr Social",
              description:
                "Listen, reach and engage customers across social channels",
              auxLinkGroupTitle: "Works Best With",
              titleIcon: "social",
              highlight: {
                title:
                  "Named a Leader in the Q3 2021 Forrester Wave for Social Suites",
                image: {
                  contentType: "refreshImage",
                  id: "7HD4xR8IjC6xT3oD1XVQxN",
                  title: "Forrester Wave - V1",
                  defaultAsset: {
                    contentType: null,
                    id: "7N18aq3Yn5l5pV5XN0mLcT",
                    title: "Forrester Wave ",
                    description: "",
                    file: {
                      url: "//images.ctfassets.net/ukazlt65o6hl/7N18aq3Yn5l5pV5XN0mLcT/475e9e18c605ccdcbd5351f4bf49a71d/MicrosoftTeams-image__51_.png",
                      details: {
                        size: 60185,
                        image: { width: 1392, height: 1050 },
                      },
                      fileName: "MicrosoftTeams-image (51).png",
                      contentType: "image/png",
                    },
                  },
                },
                cta: {
                  contentType: "refreshCta",
                  id: "2iqIFHaHQZ7x8r4APLiqHo",
                  name: "Refresh CTA",
                  type: "BUTTON",
                  label: "Learn More",
                  url: "/forrester-wave-social-suites",
                  action: "NAVIGATE",
                  variant: "primary",
                  size: "lg",
                  isOpenNewTab: false,
                },
                description:
                  "Named a Leader in the Q3 2021 Forrester Wave for Social Suites",
                isUpcomingReport: false,
              },
              overviewCta: {
                label: "Overview",
                url: "/products/social-media-management/",
                action: "NAVIGATE",
                type: "LINK",
              },
              links: [
                {
                  contentType: "refreshNavLink",
                  id: "4JP2mP5I7MK5DZRbnv3DZN",
                  title: "Social Publishing and Engagement",
                  description:
                    "Plan, manage & measure brand content across 30+ channels from one platform",
                  url: "/products/social-media-management/social-media-publishing-platform/",
                  cta: {
                    label: "Social Publishing and Engagement",
                    url: "/products/social-media-management/social-media-publishing-platform/",
                    type: "LINK",
                    action: "NAVIGATE",
                  },
                },
                {
                  contentType: "refreshNavLink",
                  id: "2Z68PNZyiOWfSAyMcNUzzX",
                  title: "Employee Advocacy",
                  description:
                    "Encourage, measure, and optimize employee advocacy for your brand on social",
                  url: "/products/social-media-management/employee-advocacy-platform/",
                  cta: {
                    label: "Employee Advocacy",
                    url: "/products/social-media-management/employee-advocacy-platform/",
                    type: "LINK",
                    action: "NAVIGATE",
                  },
                },
                {
                  contentType: "refreshNavLink",
                  id: "3Hoh2ICWJ1BfC4mGgQvb85",
                  title: "Social Marketing for Distributed Teams",
                  description:
                    "Empower distributed teams to deliver on-brand social experiences",
                  url: "/products/social-media-management/distributed-marketing-platform/",
                  cta: {
                    label: "Social Marketing for Distributed Teams",
                    url: "/products/social-media-management/distributed-marketing-platform/",
                    type: "LINK",
                    action: "NAVIGATE",
                  },
                },
              ],
              auxLinkGroupLinks: [
                {
                  contentType: "refreshNavLink",
                  id: "2DdJOxpMBKDdNuGliZ6BVK",
                  title: "Social Listening",
                  description:
                    "Gain real-time voice of customer insights across channels",
                  url: "/products/consumer-intelligence/social-listening/",
                  cta: {
                    label: "Social Listening",
                    url: "/products/consumer-intelligence/social-listening/",
                    type: "LINK",
                    action: "NAVIGATE",
                  },
                },
                {
                  contentType: "refreshNavLink",
                  id: "2wuH4B7YWewDAN0ByJvXh1",
                  title: "Social Advertising",
                  description: "Unify advertising across 10+ social channels",
                  url: "/products/marketing-and-advertising/social-advertising/",
                  cta: {
                    label: "Social Advertising",
                    url: "/products/marketing-and-advertising/social-advertising/",
                    type: "LINK",
                    action: "NAVIGATE",
                  },
                },
                {
                  contentType: "refreshNavLink",
                  id: "X8Kd3xAkcCrDOo9rOJsWa",
                  title: "Conversational Commerce",
                  description:
                    "Drive revenue on social with 1:1 chat-based commerce experiences",
                  url: "/teams/customer-service/conversational-commerce/",
                  cta: {
                    label: "Conversational Commerce",
                    url: "/teams/customer-service/conversational-commerce/",
                    type: "LINK",
                    action: "NAVIGATE",
                  },
                },
                {
                  contentType: "refreshNavLink",
                  id: "2W38DXPSEVauqHE6LZBwpK",
                  title: "Social Customer Service",
                  description:
                    "Scale customer service across 15+ social channels",
                  url: "/products/customer-service/social-media-channels/",
                  cta: {
                    label: "Social Customer Service",
                    url: "/products/customer-service/social-media-channels/",
                    type: "LINK",
                    action: "NAVIGATE",
                  },
                },
              ],
            },
            {
              contentType: "refreshMegaMenuSubNavItem",
              id: "1SDjGWbo2X8VM9ia9Odvqo",
              label: "Sprinklr Insights",
              title: "Sprinklr Insights",
              description:
                "Unlock consumer, product and market insights in real time",
              titleIcon: "insights",
              highlight: {
                title: "Forrester Sprinklr highlight",
                image: {
                  contentType: "refreshImage",
                  id: "4EASMZixA2wtXOquQjyXLF",
                  title: "Forrester Wave",
                  defaultAsset: {
                    contentType: null,
                    id: "pdxqFmW7mZGKnOctyEWln",
                    title: "Forrester Wave",
                    description: "",
                    file: {
                      url: "//images.ctfassets.net/ukazlt65o6hl/pdxqFmW7mZGKnOctyEWln/e4b19ac831c36c7620aa0a6149861409/MicrosoftTeams-image__50_.png",
                      details: {
                        size: 60185,
                        image: { width: 1392, height: 1050 },
                      },
                      fileName: "MicrosoftTeams-image (50).png",
                      contentType: "image/png",
                    },
                  },
                },
                cta: {
                  contentType: "refreshCta",
                  id: "2hGel7ixF5xphzytLJdQ2P",
                  name: "Sprinklr Insights Nav Highlight - Learn More",
                  type: "BUTTON",
                  label: "Learn more",
                  url: "/forrester-wave-social-suites/",
                  action: "NAVIGATE",
                  variant: "primary",
                  size: "lg",
                  isOpenNewTab: false,
                },
                description:
                  "Named a Leader in the Q4 2020 Forrester Wave for Social Listening Platforms",
                isUpcomingReport: false,
              },
              overviewCta: {
                label: "Overview",
                url: "/products/consumer-intelligence/",
                action: "NAVIGATE",
                type: "LINK",
              },
              links: [
                {
                  contentType: "refreshNavLink",
                  id: "4T1HFvtf4I640ChhdNjSKU",
                  title: "Social Listening",
                  description:
                    "Gain real-time Voice of Customer insights on digital and traditional channels",
                  url: "/products/consumer-intelligence/social-listening/",
                  cta: {
                    label: "Social Listening",
                    url: "/products/consumer-intelligence/social-listening/",
                    type: "LINK",
                    action: "NAVIGATE",
                  },
                },
                {
                  contentType: "refreshNavLink",
                  id: "30YhiGycuILc6fKiCO0Nre",
                  title: "Competitive Insights and Benchmarking",
                  description:
                    "Analyze your performance on social against competitors and best-in-class brands",
                  url: "/products/consumer-intelligence/competitive-benchmarking/",
                  cta: {
                    label: "Competitive Insights and Benchmarking",
                    url: "/products/consumer-intelligence/competitive-benchmarking/",
                    type: "LINK",
                    action: "NAVIGATE",
                  },
                },
                {
                  contentType: "refreshNavLink",
                  id: "7efBYt5STiXROVPXLhD5ty",
                  title: "Product Insights",
                  description:
                    "Get Voice of Customer insights about your products across the product lifecycle",
                  url: "/products/consumer-intelligence/product-insights/",
                  cta: {
                    label: "Product Insights",
                    url: "/products/consumer-intelligence/product-insights/",
                    type: "LINK",
                    action: "NAVIGATE",
                  },
                },
                {
                  contentType: "refreshNavLink",
                  id: "2uty5f4Oansux0yUBZ8K8G",
                  title: "Location Insights",
                  description:
                    "Uncover customer feedback on store performance at local, regional and global levels",
                  url: "/products/consumer-intelligence/location-insights/",
                  cta: {
                    label: "Location Insights",
                    url: "/products/consumer-intelligence/location-insights/",
                    type: "LINK",
                    action: "NAVIGATE",
                  },
                },
                {
                  contentType: "refreshNavLink",
                  id: "4u2PB1PdwBx9viFAOZtnHE",
                  title: "Visual Insights",
                  description:
                    "Go beyond text with Sprinklr’s AI-powered image detection capabilities and unlock insights based on visual data",
                  url: "/products/consumer-intelligence/visual-insights/",
                  cta: {
                    label: "Visual Insights",
                    url: "/products/consumer-intelligence/visual-insights/",
                    type: "LINK",
                    action: "NAVIGATE",
                  },
                },
                {
                  contentType: "refreshNavLink",
                  id: "7Ia6WyOJgiBwwCQhK76vLI",
                  title: "Media Monitoring and Analytics",
                  description:
                    "Track brand mentions in media, discover trends and insights and build an effective PR strategy",
                  url: "/products/consumer-intelligence/media-monitoring/",
                  cta: {
                    label: "Media Monitoring and Analytics",
                    url: "/products/consumer-intelligence/media-monitoring/",
                    type: "LINK",
                    action: "NAVIGATE",
                  },
                },
              ],
            },
            {
              contentType: "refreshMegaMenuSubNavItem",
              id: "s8NG5UupOFA3KTlyyVtq3",
              label: "Sprinklr Marketing",
              title: "Sprinklr Marketing",
              description:
                "Orchestrate consistent, on-brand global marketing campaigns",
              titleIcon: "marketing",
              highlight: {
                title: "Sprinklr Marketing Highlight",
                image: {
                  contentType: "refreshImage",
                  id: "4Ot24uYBYiQuln1PtI1O3x",
                  title:
                    "Named as a Leader: 2023 Gartner® Magic Quadrant™ for Content Marketing Platforms",
                  defaultAsset: {
                    contentType: null,
                    id: "5t0rgPwYmrtgLQ3fHaHrsU",
                    title:
                      "Leader: 2023 Gartner® Magic Quadrant™ for Content Marketing Platforms",
                    description: "",
                    file: {
                      url: "//images.ctfassets.net/ukazlt65o6hl/5t0rgPwYmrtgLQ3fHaHrsU/5fc4c8b8abbf0ac09e1ac820bcef9e42/Gartner-_Sprinklr.png",
                      details: {
                        size: 58191,
                        image: { width: 1392, height: 1050 },
                      },
                      fileName: "Gartner-_Sprinklr.png",
                      contentType: "image/png",
                    },
                  },
                },
                cta: {
                  contentType: "refreshCta",
                  id: "3VsyQyJczrbx5tUVfOaQxc",
                  name: "Refresh CTA",
                  type: "BUTTON",
                  label: "Learn More",
                  url: "/gartner-cmp-2023/",
                  action: "NAVIGATE",
                  variant: "primary",
                  size: "lg",
                  isOpenNewTab: false,
                },
                description:
                  "Named as a Leader: 2023 Gartner® Magic Quadrant™ for Content Marketing Platforms",
                isUpcomingReport: false,
              },
              overviewCta: {
                label: "Overview",
                url: "/products/marketing-and-advertising/",
                action: "NAVIGATE",
                type: "LINK",
              },
              links: [
                {
                  contentType: "refreshNavLink",
                  id: "16iDjulOg2WqGCGLUG1iLI",
                  title: "Content Marketing and Campaign Planning",
                  description:
                    "Manage end-to-end content planning, production and distribution from one place",
                  url: "/products/marketing-and-advertising/content-marketing/",
                  cta: {
                    label: "Content Marketing and Campaign Planning",
                    url: "/products/marketing-and-advertising/content-marketing/",
                    type: "LINK",
                    action: "NAVIGATE",
                  },
                },
                {
                  contentType: "refreshNavLink",
                  id: "67JHZsyYQCkw7nTYtt7MCs",
                  title: "Social Advertising",
                  description:
                    "Unify advertising across 10+ social channels on a single platform",
                  url: "/products/marketing-and-advertising/social-advertising/",
                  cta: {
                    label: "Social Advertising",
                    url: "/products/marketing-and-advertising/social-advertising/",
                    type: "LINK",
                    action: "NAVIGATE",
                  },
                },
                {
                  contentType: "refreshNavLink",
                  id: "7GSPGFGqDuuxbSrk5Y4vOA",
                  title: "Marketing Analytics",
                  description:
                    "Get a unified view of campaign performance on 30+ channels and third-party data",
                  url: "/products/marketing-and-advertising/marketing-analytics/",
                  cta: {
                    label: "Marketing Analytics",
                    url: "/products/marketing-and-advertising/marketing-analytics/",
                    type: "LINK",
                    action: "NAVIGATE",
                  },
                },
                {
                  contentType: "refreshNavLink",
                  id: "J2DUVktGCOpWPWGqqwAGT",
                  title: "Ad Comment Moderation",
                  description:
                    "Uncover, monitor and engage with comments on dark posts on social channels.",
                  url: "/products/marketing-and-advertising/ad-comment/",
                  cta: {
                    label: "Ad Comment Moderation",
                    url: "/products/marketing-and-advertising/ad-comment/",
                    type: "LINK",
                    action: "NAVIGATE",
                  },
                },
              ],
            },
          ],
        },
        {
          type: "LINK",
          title: "Self-Serve Offerings",
          items: [
            {
              cta: {
                type: "LINK",
                action: "NAVIGATE",
                label: "Sprinklr Social - Advanced Plan",
                url: "/products/social-media-management/self-serve/",
              },
              label: "Sprinklr Social - Advanced Plan",
            },
            {
              cta: {
                type: "LINK",
                action: "NAVIGATE",
                label: "Sprinklr Service - Advanced Plan",
                url: "/products/customer-service/self-serve/",
              },
              label: "Sprinklr Service - Advanced Plan",
            },
          ],
        },
        {
          type: "SUB_MENU",
          items: [
            {
              contentType: "refreshMegaMenuSubNavItem",
              id: "45K01zdL1XcXrKvJWXWM1A",
              label: "Sprinklr Platform",
              title: "Platform",
              description:
                "The only \\n Unified-CXM platform for enterprises powered by industry-leading AI",
              highlight: {
                title: "Ventana Research ",
                image: {
                  contentType: "refreshImage",
                  id: "2Gmvjs7MTdEsRDnXgURzsh",
                  title: "Ventana Research",
                  defaultAsset: {
                    contentType: null,
                    id: "3xCGHQEQqYf0TjVSioD4IG",
                    title: "Ventana Research",
                    description: "",
                    file: {
                      url: "//images.ctfassets.net/ukazlt65o6hl/3xCGHQEQqYf0TjVSioD4IG/fd59100acdd497a6b85b440e633238b9/Ventana_Research.png",
                      details: {
                        size: 375567,
                        image: { width: 1392, height: 1050 },
                      },
                      fileName: "Ventana_Research.png",
                      contentType: "image/png",
                    },
                  },
                },
                cta: {
                  contentType: "refreshCta",
                  id: "2iuOyeAKu374s8hfsDScIz",
                  name: "Sprinklr Platform Nav Highlight - Learn More",
                  type: "BUTTON",
                  label: "Learn more",
                  url: "/ventana-research-report-2023/",
                  action: "NAVIGATE",
                  variant: "primary",
                  size: "lg",
                  isOpenNewTab: false,
                },
                description:
                  "Sprinklr Named ‘Exemplary Vendor’ in 2023 Customer Experience Management Value Index",
                isUpcomingReport: false,
              },
              overviewCta: {
                label: "Overview",
                url: "/products/platform/",
                action: "NAVIGATE",
                type: "LINK",
              },
              links: [
                {
                  contentType: "refreshNavLink",
                  id: "3SPC0g5RrPOCT3iEwpwQmv",
                  title: "Sprinklr AI",
                  description:
                    "Purpose-built AI that processes unstructured CX data at scale for actionable insights",
                  url: "/products/platform/ai/",
                  cta: {
                    label: "Sprinklr AI",
                    url: "/products/platform/ai/",
                    type: "LINK",
                    action: "NAVIGATE",
                  },
                },
                {
                  contentType: "refreshNavLink",
                  id: "oP2ebAazbiP4Q9Y8y6Q6W",
                  title: "Sprinklr AI+",
                  description:
                    "The best of Sprinklr AI and Generative AI technologies and tools",
                  url: "/products/platform/ai-plus/",
                  cta: {
                    label: "Sprinklr AI+",
                    url: "/products/platform/ai-plus/",
                    type: "LINK",
                    action: "NAVIGATE",
                  },
                },
                {
                  contentType: "refreshNavLink",
                  id: "2xKXGnqDUfC5zjsvlViMAC",
                  title: "AI Studio",
                  description:
                    "Create customized, powerful AI text classification models easily — without coding.",
                  url: "/products/platform/ai-studio/",
                  cta: {
                    label: "AI Studio",
                    url: "/products/platform/ai-studio/",
                    type: "LINK",
                    action: "NAVIGATE",
                  },
                },
                {
                  contentType: "refreshNavLink",
                  id: "31zt5Jjp7nU1raTEb6u29x",
                  title: "Security",
                  description:
                    "Explore Sprinklr’s security features and data privacy measures.",
                  url: "/trust/",
                  cta: {
                    label: "Security",
                    url: "/trust/",
                    type: "LINK",
                    action: "NAVIGATE",
                  },
                },
                {
                  contentType: "refreshNavLink",
                  id: "6QjLjrW4MoWPSY1Pz6fl0v",
                  title: "Integrations",
                  description:
                    "Connect to third-party systems and applications and unify your data under one platform",
                  url: "/products/platform/integrations/",
                  cta: {
                    label: "Integrations",
                    url: "/products/platform/integrations/",
                    type: "LINK",
                    action: "NAVIGATE",
                  },
                },
                {
                  contentType: "refreshNavLink",
                  id: "5Xmv8oZC9rJetMvum7xO0W",
                  title: "Sandbox",
                  description:
                    "Experiment and learn in an isolated test setting that mimics your live production environment.",
                  url: "/products/platform/sprinklr-sandbox/",
                  cta: {
                    label: "Sandbox",
                    url: "/products/platform/sprinklr-sandbox/",
                    type: "LINK",
                    action: "NAVIGATE",
                  },
                },
                {
                  contentType: "refreshNavLink",
                  id: "3UBSlMDBLD06YrF5sPfXti",
                  title: "Display",
                  description:
                    "Visualize real-time data on command centers, retail signage, stadium screens, and more.",
                  url: "/products/platform/display/",
                  cta: {
                    label: "Display",
                    url: "/products/platform/display/",
                    type: "LINK",
                    action: "NAVIGATE",
                  },
                },
                {
                  contentType: "refreshNavLink",
                  id: "2FLnsRl78O5Vlmj1JMBSSv",
                  title: "Presentations",
                  description:
                    "Build on-brand, shareable digital presentations that update with real-time data automatically.",
                  url: "/products/platform/presentations/",
                  cta: {
                    label: "Presentations",
                    url: "/products/platform/presentations/",
                    type: "LINK",
                    action: "NAVIGATE",
                  },
                },
                {
                  contentType: "refreshNavLink",
                  id: "5MoOjrBNsWDGzwyjAsBONf",
                  title: "Active Data Retention",
                  description:
                    "Store Sprinklr data for customized time periods to meet business or compliance needs.",
                  url: "/products/platform/active-data-retention/",
                  cta: {
                    label: "Active Data Retention",
                    url: "/products/platform/active-data-retention/",
                    type: "LINK",
                    action: "NAVIGATE",
                  },
                },
                {
                  contentType: "refreshNavLink",
                  id: "7kWAjMQbCpXEJ3efM18ZSP",
                  title: "API",
                  description:
                    "Integrate data and execute processes with external systems using RESTful web APIs.",
                  url: "https://developer.sprinklr.com/",
                  cta: {
                    label: "API",
                    url: "https://developer.sprinklr.com/",
                    type: "LINK",
                    action: "NAVIGATE",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "MULTI_LEVEL_INFO_HIGHLIGHTS",
      contentType: "refreshNestedMenuInfoHighlights",
      id: "1UdsQ8ll1EPjMDRzofl7iG",
      label: "Solutions",
      subMenuItems: [
        {
          type: "INFO_HIGHLIGHTS",
          label: "By Industry",
          subNavItems: [
            {
              contentType: "refreshInfoHighlightsSubNavItem",
              id: "6bAblbe9NXugikWnyCCrLG",
              label: "CPG",
              title: "Sprinklr for CPG Brands",
              description:
                "Stay ahead of disruptive trends, build great products and win consumer love",
              overviewCta: {
                label: "Overview",
                url: "/industries/cpg",
                action: "NAVIGATE",
                type: "LINK",
              },
              highlights: [],
            },
            {
              contentType: "refreshInfoHighlightsSubNavItem",
              id: "2qLnCjH1TLzJVCBn2nYtH8",
              label: "Financial Services",
              title: "Sprinklr for Financial Services",
              description:
                "Personalize customer engagement with enterprise-grade governance and compliance",
              overviewCta: {
                label: "Overview",
                url: "/industries/financial-services",
                action: "NAVIGATE",
                type: "LINK",
              },
              highlights: [],
            },
            {
              contentType: "refreshInfoHighlightsSubNavItem",
              id: "5jsqBFaB6xRagFrNaHdrGB",
              label: "Retail",
              title: "Sprinklr for Retail Industry",
              description:
                "Stay ahead of consumer trends, track store performance, elevate shopping experience and drive loyalty",
              overviewCta: {
                label: "Overview",
                url: "/industries/retail",
                action: "NAVIGATE",
                type: "LINK",
              },
              highlights: [],
            },
            {
              contentType: "refreshInfoHighlightsSubNavItem",
              id: "2aDq84TweKc2tBBhfo3hRH",
              label: "Technology",
              title: "Sprinklr for Technology Brands",
              description:
                "Innovate faster and create memorable customer experiences",
              overviewCta: {
                label: "Overview",
                url: "/industries/technology",
                action: "NAVIGATE",
                type: "LINK",
              },
              highlights: [],
            },
            {
              contentType: "refreshInfoHighlightsSubNavItem",
              id: "3fINYtHt7Wyt5DccNGZDKC",
              label: "Telecommunications",
              title: "Sprinklr for Telecommunications",
              description:
                "Elevate loyalty by providing standout experiences throughout the subscriber journey.",
              overviewCta: {
                label: "Overview",
                url: "/industries/telecom/",
                action: "NAVIGATE",
                type: "LINK",
              },
              highlights: [],
            },
            {
              contentType: "refreshInfoHighlightsSubNavItem",
              id: "34ujuRt7O1KWdfki5EJWG7",
              label: "Travel & Hospitality",
              title: "Sprinklr for Travel & Hospitality",
              description:
                "Deliver 5-star experiences to your guests and flyers across the globe",
              overviewCta: {
                label: "Overview",
                url: "/industries/travel-hospitality/",
                action: "NAVIGATE",
                type: "LINK",
              },
              highlights: [],
            },
          ],
        },
        {
          type: "LINKS_COLUMN",
          label: "By Teams",
          columns: [
            {
              title: "Marketing Teams",
              links: [
                {
                  title: "Crisis Detection & Brand Health Monitoring",
                  cta: {
                    label: "Crisis Detection & Brand Health Monitoring",
                    url: "/teams/marketing/crisis-detection-brand-health-monitoring/",
                    action: "NAVIGATE",
                    type: "LINK",
                  },
                },
                {
                  title: "Content Lifecycle Management",
                  cta: {
                    label: "Content Lifecycle Management",
                    url: "/teams/marketing/campaign-content-lifecycle-management/",
                    action: "NAVIGATE",
                    type: "LINK",
                  },
                },
                {
                  title: "Social Media Management",
                  cta: {
                    label: "Social Media Management",
                    url: "/teams/marketing/social/",
                    action: "NAVIGATE",
                    type: "LINK",
                  },
                },
                {
                  title: "Compliant Digital Selling",
                  cta: {
                    label: "Compliant Digital Selling",
                    url: "/teams/marketing/compliant-digital-selling/",
                    action: "NAVIGATE",
                    type: "LINK",
                  },
                },
                {
                  title: "Franchise Digital Management",
                  cta: {
                    label: "Franchise Digital Management",
                    url: "/teams/marketing/franchise-digital-management/",
                    action: "NAVIGATE",
                    type: "LINK",
                  },
                },
                {
                  title: "Executive Reputation Management",
                  cta: {
                    label: "Executive Reputation Management",
                    url: "/teams/marketing/executive-reputation-management/",
                    action: "NAVIGATE",
                    type: "LINK",
                  },
                },
                {
                  title: "Industry Insights and Competitive Intelligence",
                  cta: {
                    label: "Industry Insights and Competitive Intelligence",
                    url: "/teams/marketing/Industry-insights-competitive-intelligence/",
                    action: "NAVIGATE",
                    type: "LINK",
                  },
                },
                {
                  title: "Creative Production Optimisation and Insights",
                  cta: {
                    label: "Creative Production Optimisation and Insights",
                    url: "/teams/marketing/content-strategy-insights-and-optimization/",
                    action: "NAVIGATE",
                    type: "LINK",
                  },
                },
              ],
              description:
                "Unify marketing teams, create impactful brand narratives that engage your audience and boost revenue.",
              overviewCta: {
                label: "Overview",
                url: "/teams/marketing/",
                action: "NAVIGATE",
                type: "LINK",
              },
            },
            {
              title: "Customer Service Teams",
              links: [
                {
                  title: "Omnichannel Contact Center",
                  cta: {
                    label: "Omnichannel Contact Center",
                    url: "/teams/customer-service/omnichannel-contact-center/",
                    action: "NAVIGATE",
                    type: "LINK",
                  },
                },
                {
                  title: "Customer Self-Service",
                  cta: {
                    label: "Customer Self-Service",
                    url: "/teams/customer-service/customer-self-service/",
                    action: "NAVIGATE",
                    type: "LINK",
                  },
                },
                {
                  title: "Digital Customer Service",
                  cta: {
                    label: "Digital Customer Service",
                    url: "/teams/customer-service/digital-customer-service/",
                    action: "NAVIGATE",
                    type: "LINK",
                  },
                },
                {
                  title: "Outbound Campaign Management",
                  cta: {
                    label: "Outbound Campaign Management",
                    url: "/teams/customer-service/outbound-campaign-management/",
                    action: "NAVIGATE",
                    type: "LINK",
                  },
                },
                {
                  title: "Workforce Engagement Management",
                  cta: {
                    label: "Workforce Engagement Management",
                    url: "/teams/customer-service/workforce-engagement-and-optimization/",
                    action: "NAVIGATE",
                    type: "LINK",
                  },
                },
                {
                  title: "Contact Center Intelligence",
                  cta: {
                    label: "Contact Center Intelligence",
                    url: "/teams/customer-service/contact-center-intelligence/",
                    action: "NAVIGATE",
                    type: "LINK",
                  },
                },
                {
                  title: "Social Customer Service",
                  cta: {
                    label: "Social Customer Service",
                    url: "/teams/customer-service/social-customer-service/",
                    action: "NAVIGATE",
                    type: "LINK",
                  },
                },
                {
                  title: "Conversational Commerce",
                  cta: {
                    label: "Conversational Commerce",
                    url: "/teams/customer-service/conversational-commerce/",
                    action: "NAVIGATE",
                    type: "LINK",
                  },
                },
                {
                  title: "Proactive Digital Engagement",
                  cta: {
                    label: "Proactive Digital Engagement",
                    url: "/teams/customer-service/proactive-digital-engagement/",
                    action: "NAVIGATE",
                    type: "LINK",
                  },
                },
              ],
              description:
                "Unify contact center teams, reduce costs, and deliver outstanding service across all channels.",
              overviewCta: {
                label: "Overview",
                url: "/teams/customer-service/",
                action: "NAVIGATE",
                type: "LINK",
              },
            },
          ],
        },
      ],
    },
    {
      type: "LINK",
      label: "Unified-CXM",
      cta: {
        label: "Unified-CXM",
        url: "javascript:void(0)",
        action: "NAVIGATE",
      },
    },
    {
      type: "LINK",
      label: "Customers",
      cta: { label: "Customers", url: "/stories", action: "NAVIGATE" },
    },
    {
      type: "LINKS_HIGHLIGHTS",
      label: "Company",
      subNavItems: [
        {
          contentType: "refreshLinksHighlightsSubNavItem",
          id: "3nA2nUnSRI68gNogwJsJvI",
          label: "Company",
          links: [
            {
              contentType: "refreshNavLink",
              id: "2yaBTc6IAkBsFzpgI8zDY0",
              title: "Our Story",
              url: "/our-story",
              cta: {
                label: "Our Story",
                url: "/our-story",
                action: "NAVIGATE",
                type: "LINK",
              },
            },
            {
              contentType: "refreshNavLink",
              id: "Plsbj6VlTMG21bpZCYDFx",
              title: "Leadership",
              url: "/leadership/",
              cta: {
                label: "Leadership",
                url: "/leadership/",
                action: "NAVIGATE",
                type: "LINK",
              },
            },
            {
              contentType: "refreshNavLink",
              id: "72nAEIyJ8gNCX9EcnM2tDO",
              title: "Newsroom",
              url: "/newsroom",
              cta: {
                label: "Newsroom",
                url: "/newsroom",
                action: "NAVIGATE",
                type: "LINK",
              },
            },
            {
              contentType: "refreshNavLink",
              id: "5OnVbwS5EQAPoxY2Qfvt9N",
              title: "Partners",
              url: "/partners",
              cta: {
                label: "Partners",
                url: "/partners",
                action: "NAVIGATE",
                type: "LINK",
              },
            },
            {
              contentType: "refreshNavLink",
              id: "46843pGi867hDuyqTwn5Xx",
              title: "Careers",
              url: "/careers",
              cta: {
                label: "Careers",
                url: "/careers",
                action: "NAVIGATE",
                type: "LINK",
              },
            },
            {
              contentType: "refreshNavLink",
              id: "50yEYPiAFU0I0yiwWckCMB",
              title: "Culture & Talent",
              url: "/culture-talent",
              cta: {
                label: "Culture & Talent",
                url: "/culture-talent",
                action: "NAVIGATE",
                type: "LINK",
              },
            },
            {
              contentType: "refreshNavLink",
              id: "2f2o26OyXEpA67tY79OP4L",
              title: "Investor Relations",
              url: "https://investors.sprinklr.com/",
              cta: {
                label: "Investor Relations",
                url: "https://investors.sprinklr.com/",
                action: "NAVIGATE",
                type: "LINK",
              },
            },
            {
              contentType: "refreshNavLink",
              id: "4PHqae8dPnIw3ykhBES4Fx",
              title: "Security & Data Privacy",
              url: "/trust",
              cta: {
                label: "Security & Data Privacy",
                url: "/trust",
                action: "NAVIGATE",
                type: "LINK",
              },
            },
          ],
          highlights: [
            {
              title: "Featured Report",
              cards: [
                {
                  title: "In The News",
                  image: {
                    contentType: "refreshImage",
                    id: "3BJRwWKfhthHR39FmUEYuF",
                    title: "Image",
                    defaultAsset: {
                      contentType: null,
                      id: "2gseyILIPcz3ZiFgwlytOx",
                      title: "newsroom - mainstory image",
                      file: {
                        url: "//images.ctfassets.net/ukazlt65o6hl/2gseyILIPcz3ZiFgwlytOx/750b34fab577639f6f081141cf0c22e9/Sept_2020_Sprinklr_BlogHeader2__1_.png",
                        details: {
                          size: 1086957,
                          image: { width: 1920, height: 700 },
                        },
                        fileName: "Sept_2020_Sprinklr_BlogHeader2 (1).png",
                        contentType: "image/png",
                      },
                    },
                  },
                  cta: {
                    contentType: "refreshCta",
                    id: "5ED6mMyGYHL8vGgb0xYS6v",
                    name: "CTA",
                    type: "LINK",
                    label: "Read Story",
                    url: "/newsroom/sprinklr-named-to-2023-fortune-best-workplaces-in-new-york/",
                    action: "NAVIGATE",
                    variant: "primary",
                    size: "lg",
                    isOpenNewTab: false,
                  },
                  description:
                    "Sprinklr Named to 2023 Fortune Best Workplaces in New York™",
                  isUpcomingReport: false,
                },
                {
                  title: "Recognition",
                  image: {
                    contentType: "refreshImage",
                    id: "2hNvcIsL0sJaOiz0l0OjWA",
                    title: "Image",
                    defaultAsset: {
                      contentType: null,
                      id: "3JxRJjvukEXC1ph8R4DpTC",
                      title: "Gartner- Sprinklr",
                      description: "",
                      file: {
                        url: "//images.ctfassets.net/ukazlt65o6hl/3JxRJjvukEXC1ph8R4DpTC/67155343637b4a0f7f9935cdf397cb11/Gartner-_Sprinklr.png",
                        details: {
                          size: 58191,
                          image: { width: 1392, height: 1050 },
                        },
                        fileName: "Gartner- Sprinklr.png",
                        contentType: "image/png",
                      },
                    },
                  },
                  cta: {
                    contentType: "refreshCta",
                    id: "4j5yWfsk25ERNdjk66u3Fb",
                    name: "CTA",
                    type: "LINK",
                    label: "Download Report",
                    url: "/gartner-cmp-2023",
                    action: "NAVIGATE",
                    variant: "primary",
                    size: "lg",
                    isOpenNewTab: false,
                  },
                  description:
                    "Named as a Leader: 2023 Gartner® Magic Quadrant™ for Content Marketing Platforms",
                  isUpcomingReport: false,
                },
              ],
            },
            {
              title: "The Sprinklr Way",
              cards: [
                {
                  title: "The Sprinklr Way",
                  image: {
                    contentType: "refreshImage",
                    id: "2bv8OTksaeS8F99tb6S7h6",
                    title: "Image",
                    defaultAsset: {
                      contentType: null,
                      id: "2Dpwl4Trda25TIjKifTbbN",
                      title:
                        "Contact Centre Talent Management needs a rethink. What’s critical and how can technology help.",
                      description: "",
                      file: {
                        url: "//images.ctfassets.net/ukazlt65o6hl/2Dpwl4Trda25TIjKifTbbN/4e68571d198925f71b57a627b353b936/Banner.webp",
                        details: {
                          size: 131908,
                          image: { width: 1920, height: 1080 },
                        },
                        fileName: "Banner.webp",
                        contentType: "image/webp",
                      },
                    },
                  },
                  cta: {
                    contentType: "refreshCta",
                    id: "5akfxHcwmFdtjB7n3Kb9o2",
                    name: "CTA",
                    type: "LINK",
                    label: "Join Us",
                    url: "/culture-talent/",
                    action: "NAVIGATE",
                    variant: "primary",
                    size: "lg",
                    isOpenNewTab: false,
                  },
                  description:
                    "Join the team that creates HAPPIER in everything we do!",
                  isUpcomingReport: false,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "LINKS_HIGHLIGHTS",
      label: "Resources",
      subNavItems: [
        {
          contentType: "refreshLinksHighlightsSubNavItem",
          id: "60sA5E5VFYu8B6WvN53J1T",
          label: "Learn",
          links: [
            {
              contentType: "refreshNavLink",
              id: "3A1j3likQPDUaSCEl3CgFS",
              title: "CX-WISE Podcast",
              url: "/cx-wise/#home",
              cta: {
                label: "CX-WISE Podcast",
                url: "/cx-wise/#home",
                action: "NAVIGATE",
                type: "LINK",
              },
            },
            {
              contentType: "refreshNavLink",
              id: "25ThKvybr7zNQ2fmxrAI3Q",
              title: "Analyst Reports",
              url: "/analyst-reports",
              cta: {
                label: "Analyst Reports",
                url: "/analyst-reports",
                action: "NAVIGATE",
                type: "LINK",
              },
            },
            {
              contentType: "refreshNavLink",
              id: "6SEw2qhgCOwyVbZbovqV3O",
              title: "Product Demo Days",
              url: "/demo-days/",
              cta: {
                label: "Product Demo Days",
                url: "/demo-days/",
                action: "NAVIGATE",
                type: "LINK",
              },
            },
            {
              contentType: "refreshNavLink",
              id: "2hNbreYZyqxlTaCXzUZiVP",
              title: "eBooks & Reports",
              url: "/resources",
              cta: {
                label: "eBooks & Reports",
                url: "/resources",
                action: "NAVIGATE",
                type: "LINK",
              },
            },
            {
              contentType: "refreshNavLink",
              id: "76aU6JY2rJ1nT7Bh1tQBHU",
              title: "Events & Webinars",
              url: "/events",
              cta: {
                label: "Events & Webinars",
                url: "/events",
                action: "NAVIGATE",
                type: "LINK",
              },
            },
            {
              contentType: "refreshNavLink",
              id: "5irCgCd688WbWpC6XWC4NH",
              title: "Blog",
              url: "/blog",
              cta: {
                label: "Blog",
                url: "/blog",
                action: "NAVIGATE",
                type: "LINK",
              },
            },
            {
              contentType: "refreshNavLink",
              id: "2l4TKteIQK2bn5qHr1vxT3",
              title: "Unified-CXM Guide",
              url: "/cxm",
              cta: {
                label: "Unified-CXM Guide",
                url: "/cxm",
                action: "NAVIGATE",
                type: "LINK",
              },
            },
          ],
          highlights: [
            {
              title: "Featured Report",
              cards: [
                {
                  title: "Featured Report",
                  image: {
                    contentType: "refreshImage",
                    id: "8UVb19JHshFEfqa2xZKJk",
                    title: "Image",
                    defaultAsset: {
                      contentType: null,
                      id: "Lg9DWXSE1uN7ACt0oZ6Od",
                      title: "CCW LP Banner - 1920 x 1920",
                      description: "",
                      file: {
                        url: "//images.ctfassets.net/ukazlt65o6hl/Lg9DWXSE1uN7ACt0oZ6Od/9d8cf2ba99f5ae18fd4e66b7f739d1a6/CCW_LP_Banner_-_1920_x_1920.png",
                        details: {
                          size: 9360697,
                          image: { width: 5760, height: 5760 },
                        },
                        fileName: "CCW LP Banner - 1920 x 1920.png",
                        contentType: "image/png",
                      },
                    },
                  },
                  cta: {
                    contentType: "refreshCta",
                    id: "1P2OhlDopG0eG13GqsLpbW",
                    name: "CTA",
                    type: "LINK",
                    label: "Download Report",
                    url: "/resources/ccw-digital-market-study-generative-ai-and-chatbots/",
                    action: "NAVIGATE",
                    variant: "primary",
                    size: "lg",
                    isOpenNewTab: false,
                  },
                  description:
                    "CCW Digital | 2023 Market Study: Generative AI and chatbots",
                  isUpcomingReport: false,
                },
                {
                  title: "Featured Report",
                  image: {
                    contentType: "refreshImage",
                    id: "6xUQsEDyjLfaWVxc2OpFYR",
                    title: "Image",
                    defaultAsset: {
                      contentType: null,
                      id: "1ZKiVHsnVVqHQrwy2y5tw3",
                      title: "Book Mockup",
                      description: "",
                      file: {
                        url: "//images.ctfassets.net/ukazlt65o6hl/1ZKiVHsnVVqHQrwy2y5tw3/5ec8b3d9d351f78e3f7e218735291aca/Book_Mockup.png",
                        details: {
                          size: 2501709,
                          image: { width: 3738, height: 2542 },
                        },
                        fileName: "Book Mockup.png",
                        contentType: "image/png",
                      },
                    },
                  },
                  cta: {
                    contentType: "refreshCta",
                    id: "7le5oLe9NzV9hatb8965Iy",
                    name: "CTA",
                    type: "LINK",
                    label: "Download Report",
                    url: "/resources/unified-cx-benchmark-report-tech-leaders/",
                    action: "NAVIGATE",
                    variant: "primary",
                    size: "lg",
                    isOpenNewTab: false,
                  },
                  description:
                    "Unified-CX Benchmarking Report 2023: Tech Leaders",
                  isUpcomingReport: false,
                },
              ],
            },
            {
              title: "Upcoming Report",
              cards: [
                {
                  title: "Upcoming Event",
                  image: {
                    contentType: "refreshImage",
                    id: "6g1UOj9xcuEMd2I2KMBXfJ",
                    title: "Image",
                    defaultAsset: {
                      contentType: null,
                      id: "13AyYjTHODl715lmrU36em",
                      title: "gliding",
                      description: "must-watch events",
                      file: {
                        url: "//images.ctfassets.net/ukazlt65o6hl/13AyYjTHODl715lmrU36em/b00702be0a547b88322b574733320676/photo-1551891587-d8e5ce1731f1.jpeg",
                        details: {
                          size: 181912,
                          image: { width: 1651, height: 1101 },
                        },
                        fileName: "photo-1551891587-d8e5ce1731f1.jpeg",
                        contentType: "image/jpeg",
                      },
                    },
                  },
                  cta: {
                    contentType: "refreshCta",
                    id: "46c9ZfF8nrh0fYjy5x0Lo4",
                    name: "CTA",
                    type: "LINK",
                    label: "Register Now",
                    url: "/events/social-advanced-demo-series/",
                    action: "NAVIGATE",
                    variant: "primary",
                    size: "lg",
                    isOpenNewTab: false,
                  },
                  description:
                    "Master social media management with the all-new, powerfully simple Sprinklr Social self-serve.",
                  isUpcomingReport: false,
                },
              ],
            },
          ],
        },
        {
          contentType: "refreshLinksHighlightsSubNavItem",
          id: "2locdOdAB67ldUmOJiWnXt",
          label: "Services",
          links: [
            {
              contentType: "refreshNavLink",
              id: "ARfY6lYf1jJ536KKmdOk9",
              title: "Our Services",
              url: "/services",
              cta: {
                label: "Our Services",
                url: "/services",
                action: "NAVIGATE",
                type: "LINK",
              },
            },
            {
              contentType: "refreshNavLink",
              id: "3C2k8RWGSg6XoFRpzJ6OBK",
              title: "Training",
              url: "/sprinklr-training",
              cta: {
                label: "Training",
                url: "/sprinklr-training",
                action: "NAVIGATE",
                type: "LINK",
              },
            },
            {
              contentType: "refreshNavLink",
              id: "5NN5u2zyxblc2og40ibOPP",
              title: "For Agencies",
              url: "/agency",
              cta: {
                label: "For Agencies",
                url: "/agency",
                action: "NAVIGATE",
                type: "LINK",
              },
            },
          ],
          highlights: [
            {
              title: "Featured Report",
              cards: [
                {
                  title: "Partner with Sprinklr",
                  image: {
                    contentType: "refreshImage",
                    id: "5f47ZFiSlW0Vn3YVb3xm14",
                    title: "Image",
                    defaultAsset: {
                      contentType: null,
                      id: "2iLA5mddlWyOtSxJB91GKo",
                      title: "Partners Hero",
                      description: "",
                      file: {
                        url: "//images.ctfassets.net/ukazlt65o6hl/2iLA5mddlWyOtSxJB91GKo/dcdf82e6f54a7cbb5aff4590bc5fccbe/Partners_Hero.png",
                        details: {
                          size: 988706,
                          image: { width: 1230, height: 690 },
                        },
                        fileName: "Partners Hero.png",
                        contentType: "image/png",
                      },
                    },
                  },
                  cta: {
                    contentType: "refreshCta",
                    id: "PFBuWaDgKPBOW42TQTDdJ",
                    name: "CTA",
                    type: "LINK",
                    label: "Learn More",
                    url: "/partners/",
                    action: "NAVIGATE",
                    variant: "primary",
                    size: "lg",
                    isOpenNewTab: false,
                  },
                  description: "Achieve more with Sprinklr Unified Partners",
                  isUpcomingReport: false,
                },
                {
                  title: "Sprinklr Trust",
                  image: {
                    contentType: "refreshImage",
                    id: "4vbpS6OJVJsxtl3mbOiNre",
                    title: "Image",
                    defaultAsset: {
                      contentType: null,
                      id: "41Mwl8kFtyGNEBBw1lxVXk",
                      title: "Main Header",
                      file: {
                        url: "//images.ctfassets.net/ukazlt65o6hl/41Mwl8kFtyGNEBBw1lxVXk/d5b245d58528e458cbab3d85e0ee80a6/Main_Header.png",
                        details: {
                          size: 3990088,
                          image: { width: 1860, height: 1692 },
                        },
                        fileName: "Main Header.png",
                        contentType: "image/png",
                      },
                    },
                  },
                  cta: {
                    contentType: "refreshCta",
                    id: "2croSNKfIlKsfiSypN3pgZ",
                    name: "CTA",
                    type: "LINK",
                    label: "Learn More",
                    url: "/trust/",
                    action: "NAVIGATE",
                    variant: "primary",
                    size: "lg",
                    isOpenNewTab: false,
                  },
                  description:
                    "A relentless commitment to security and privacy",
                  isUpcomingReport: false,
                },
              ],
            },
            {
              title: "Help Center",
              cards: [
                {
                  title: "Help Center",
                  image: {
                    contentType: "refreshImage",
                    id: "2eWbLZVxPaW3T2QC3ZTtyd",
                    title: "Image",
                    defaultAsset: {
                      contentType: null,
                      id: "1WDCKRLEmaD7qg60RWWOto",
                      title:
                        "An image showcasing an illustration of a chatbot asking the user, can I help you?",
                      file: {
                        url: "//images.ctfassets.net/ukazlt65o6hl/1WDCKRLEmaD7qg60RWWOto/0163e685f21cf46594ee7a43e4509305/AdobeStock_567681994.jpeg",
                        details: {
                          size: 6680553,
                          image: { width: 6720, height: 3384 },
                        },
                        fileName: "AdobeStock_567681994.jpeg",
                        contentType: "image/jpeg",
                      },
                    },
                  },
                  cta: {
                    contentType: "refreshCta",
                    id: "1Ncnvthmztb8UPSsV26Tym",
                    name: "CTA",
                    type: "LINK",
                    label: "Learn More",
                    url: "/help/",
                    action: "NAVIGATE",
                    variant: "primary",
                    size: "lg",
                    isOpenNewTab: false,
                  },
                  description: "How can we help you?",
                  isUpcomingReport: false,
                },
              ],
            },
          ],
        },
        {
          contentType: "refreshLinksHighlightsSubNavItem",
          id: "369byZkicWLi7Xrs80ncxS",
          label: "Support",
          links: [
            {
              contentType: "refreshNavLink",
              id: "1Nrnl022IxhRlgAa03sYVx",
              title: "Help Center",
              url: "/help",
              cta: {
                label: "Help Center",
                url: "/help",
                action: "NAVIGATE",
                type: "LINK",
              },
            },
            {
              contentType: "refreshNavLink",
              id: "41JZjfBQ8wiOUBKFefFS3g",
              title: "Release Notes",
              url: "https://www.sprinklr.com/help/categories/release-notes/6328445025677d3d31fd6dcd/",
              cta: {
                label: "Release Notes",
                url: "https://www.sprinklr.com/help/categories/release-notes/6328445025677d3d31fd6dcd/",
                action: "NAVIGATE",
                type: "LINK",
              },
            },
            {
              contentType: "refreshNavLink",
              id: "165C1uXJzbaWliFL5TFTq1",
              title: "Contact Us",
              url: "/contact-us",
              cta: {
                label: "Contact Us",
                url: "/contact-us",
                action: "NAVIGATE",
                type: "LINK",
              },
            },
          ],
          highlights: [
            {
              title: "What's New",
              cards: [
                {
                  title: "What's New",
                  image: {
                    contentType: "refreshImage",
                    id: "5b7gnbFM6HYrHOWmKgvoKX",
                    title: "Image",
                    defaultAsset: {
                      contentType: null,
                      id: "TAfe3kpEjKzXH3IJ1wOcU",
                      title: "Social media for business banner",
                      description: "",
                      file: {
                        url: "//images.ctfassets.net/ukazlt65o6hl/TAfe3kpEjKzXH3IJ1wOcU/43f406018bb668399db65faed35ec462/Social_media_for_business_banner.png",
                        details: {
                          size: 8007841,
                          image: { width: 7934, height: 5292 },
                        },
                        fileName: "Social media for business banner.png",
                        contentType: "image/jpeg",
                      },
                    },
                  },
                  cta: {
                    contentType: "refreshCta",
                    id: "3uBDEtEwV3ojRc90Y6MxLg",
                    name: "CTA",
                    type: "LINK",
                    label: "Read Now",
                    url: "/releases/18-5-spring-2023/",
                    action: "NAVIGATE",
                    variant: "primary",
                    size: "lg",
                    isOpenNewTab: false,
                  },
                  description: "Check out Sprinklr's Summer 2023 Release",
                  isUpcomingReport: false,
                },
                {
                  title: "What's New",
                  image: {
                    contentType: "refreshImage",
                    id: "6mrHEXO6bDdqYeb4hsu5c2",
                    title: "Image",
                    defaultAsset: {
                      contentType: null,
                      id: "4Hww2l9IREU9NZtwSt6ee3",
                      title: "Marketingspeak",
                      description: "Girl reading book",
                      file: {
                        url: "//images.ctfassets.net/ukazlt65o6hl/4Hww2l9IREU9NZtwSt6ee3/27d7227717f043b43fc3ecca8721c66c/Marketingspeak.jpg",
                        details: {
                          size: 305328,
                          image: { width: 1920, height: 1000 },
                        },
                        fileName: "Marketingspeak.jpg",
                        contentType: "image/jpeg",
                      },
                    },
                  },
                  cta: {
                    contentType: "refreshCta",
                    id: "xjp1sfmUWnlkYoSwzVIdB",
                    name: "CTA",
                    type: "LINK",
                    label: "Read Now",
                    url: "/releases/18-5-spring-2023/",
                    action: "NAVIGATE",
                    variant: "primary",
                    size: "lg",
                    isOpenNewTab: false,
                  },
                  description: "Check out Sprinklr' Spring 2023 Release",
                  isUpcomingReport: false,
                },
              ],
            },
            {
              title: "Dev Focus",
              cards: [
                {
                  title: "Dev Focus",
                  image: {
                    contentType: "refreshImage",
                    id: "JUbCG4CpPZMoFIGYhvM3e",
                    title: "Image",
                    defaultAsset: {
                      contentType: null,
                      id: "54YoEe4PUit0Wr4t3oBsG9",
                      title: "Secure Development Lifecycle Process",
                      description: "",
                      file: {
                        url: "//images.ctfassets.net/ukazlt65o6hl/54YoEe4PUit0Wr4t3oBsG9/5a42cfacd0b9ea68b21f61bb60bbb326/01_-_Secure_Development_Lifecycle_Process_1.png",
                        details: {
                          size: 1494064,
                          image: { width: 1933, height: 1085 },
                        },
                        fileName:
                          "01_-_Secure_Development_Lifecycle_Process 1.png",
                        contentType: "image/png",
                      },
                    },
                  },
                  cta: {
                    contentType: "refreshCta",
                    id: "4VpydJQYhmh18DQkHJELIM",
                    name: "CTA",
                    type: "LINK",
                    label: "Learn More",
                    url: "https://developer.sprinklr.com/",
                    action: "NAVIGATE",
                    variant: "primary",
                    size: "lg",
                    isOpenNewTab: false,
                  },
                  description: "Get access to Sprinklr Developer Portal",
                  isUpcomingReport: false,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

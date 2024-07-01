import type { Meta, StoryObj } from '@storybook/react';

import { LessonTableItem } from '../../lib/main';

const meta: Meta<typeof LessonTableItem> = {
  title: 'Lessons/LessonTableItem',
  component: LessonTableItem,
  argTypes: {
    // 👇 All Button stories expect a label arg
    lessonData: {
      description: 'Lesson Data Object',
    },
    view: {
      description: 'View Lesson Function',
    },
    authors: {
      description:
        'API call happens on the front end and populates author names',
    },
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LessonTableItem>;

export const Primary: Story = {
  args: {
    lessonData: {
      getLesson: {
        author: [
          '41f53c00-b19f-43ab-ae79-763cb4c88dc4',
          '89d486ff-5870-4ddb-816d-6adbc7935075',
        ],
        backdate: '2024/05/29',
        content:
          '<p>In recent decades, various laws across the South American continent have emerged that include extended producer responsibility (EPR) requirements for packaging, containers, and other packaging-related materials. While EPR is relatively new to South America, the concept originated in <a target="_blank" rel="noreferrer" href="https://packagingschool.com/lessons/the-evolution-of-germanys-packaging-waste-laws"><u><span style="color: rgb(17, 85, 204)">Germany</span></u></a> in the early 1990s.&nbsp;</p><p>In this blog, we’ll delve into the EPR laws that encompass packaging in several South American countries, such as Colombia, Venezuela, Chile, Brazil, Peru, and Uruguay.&nbsp;</p><img src="https://packmedia54032-staging.s3.amazonaws.com/public/Screenshot 2024-05-20 at 3.42.57 PM.png"><p></p><h3 class="font-bold"><strong>EPR for Packaging in Colombia</strong></h3><img src="https://packmedia54032-staging.s3.amazonaws.com/public/colombiaEPR1.png"><p><span >Colombia launched their EPR program for packaging in 2018 with the passing of </span><a target="_blank" rel="noreferrer" href="https://g20mpl.org/partners/colombia#:~:text=Resolution%201407%20of%20July%2026,implement%20and%20keep%20updated%20an"><u><span style="color: rgb(17, 85, 204)">Resolution 1407</span></u></a><span > (July 26, 2018). The program mandates the management of “paper, cardboard, plastic, glass, metal containers, and packaging waste” controlled by the producers of identified materials. Identified producers in Colombia must develop and update an “environmental management plan” for packaging waste to share with the </span><a target="_blank" rel="noreferrer" href="https://www.minambiente.gov.co/"><u><span style="color: rgb(17, 85, 204)">Ministry of Environment and Sustainable Development</span></u></a><span >.&nbsp;</span></p><p><span >Colombia’s EPR program is part of a wider National Development Plan (2018–2022) and </span><a target="_blank" rel="noreferrer" href="https://knowledge-hub.circle-economy.com/article/15389?n=The-national-strategy-for-circular-economy-in-Colombia.-"><u><span style="color: rgb(17, 85, 204)">National Circular Economy Strategy</span></u></a><span > (ENEC) developed by President Iván Duque Márquez. The logic of the program, as reported by </span><a target="_blank" rel="noreferrer" href="https://g20mpl.org/partners/colombia#:~:text=Resolution%201407%20of%20July%2026,implement%20and%20keep%20updated%20an"><u><span style="color: rgb(17, 85, 204)">Osaka Blue Ocean Vision</span></u></a><span >, is to boost the nation\'s economic, environmental, and social development through “producing by conserving and conserving by producing.”&nbsp;</span></p><p><span >Colombia’s Resolution 1407 also calls for identified producers to </span><a target="_blank" rel="noreferrer" href="https://g20mpl.org/partners/colombia#:~:text=Resolution%201407%20of%20July%2026,implement%20and%20keep%20updated%20an"><u><span style="color: rgb(17, 85, 204)">expand EPR coverage</span></u></a><span > to more remote islands and populations by 2022, including the Archipelago Department of San Andres, Providencia and Santa Catalina. It is clear that the Colombian government is working to preserve the environment and biodiversity across the nation. Did you know Colombia hosts nearly </span><a target="_blank" rel="noreferrer" href="https://www.cbd.int/countries/profile?country=co"><u><span style="color: rgb(17, 85, 204)">10% of the planet\'s biodiversity</span></u></a><span >? With their EPR program, Colombia is working to protect and preserve the abundance of biodiversity within their terrestrial and aquatic ecosystems by making producers responsible for the waste associated with their packaging and other identified products.&nbsp;</span></p><p></p><h3 class="font-bold"><strong>EPR for Packaging in Venezuela</strong></h3><img src="https://packmedia54032-staging.s3.amazonaws.com/public/venezuelaEPR1.png"><p><span >The nation of Venezuela launched their EPR program for packaging in January of 2021 with </span><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/pulse/venezuela-extended-liability-producers-importers-jose-p-barnola-jr-/"><u><span style="color: rgb(17, 85, 204)">Resolution No.0191</span></u></a><span >. The resolution was issued in November of 2020 by the </span><a target="_blank" rel="noreferrer" href="https://bakerxchange.com/rv/ff006f7c7b62ef24f8393f7d054ca75f27031970/p=7811295"><u><span style="color: rgb(17, 85, 204)">Ministry of Popular Power for Ecosocialism</span></u></a><span > (MINEC); it extends liability of waste management and disposal to identified “producers” (producers, importers, and distributors) of packaging and containers, cardboard, tires, and more. Identified producers must </span><a target="_blank" rel="noreferrer" href="https://www.loraxcompliance.com/blog/env/2021/07/26/EPR_in_Latin_America_-_Progress_toward_implementation.html#"><u><span style="color: rgb(17, 85, 204)">submit EPR plans</span></u></a><span > (either individually or in a collective producer responsibility organization or PRO) bi-annually to MINEC and pay fees associated with the quantity and type of packaging introduced into the Venezuelan market.&nbsp;</span></p><p><span >Similar to other </span><a target="_blank" rel="noreferrer" href="https://packagingschool.com/drafts/lessons/d0cac529-c64d-4826-97fe-fcaf38dfab96"><u><span style="color: rgb(17, 85, 204)">EPR programs around the world</span></u></a><span >, the Venezuelan government allows producers to align with EPR requirements through individual or collective action. The two systems explained by </span><a target="_blank" rel="noreferrer" href="https://bakerxchange.com/rv/ff006f7c7b62ef24f8393f7d054ca75f27031970/p=7811295"><u><span style="color: rgb(17, 85, 204)">Baker Mckenzie</span></u></a><span > are:&nbsp;</span></p><ul><li ><p><span ><strong>Individual Liability System</strong>: in which a producer carries out and aligns with EPR requirements alone, having sole responsibility for “implementing it and must cover the implementation costs.”</span></p></li><li ><p><span ><strong>Collective Liability System</strong>: in which a producer will join a “set or mixed group of producers, generators, etc.” to co-finance and manage EPR systems, essentially a PRO.&nbsp;</span></p></li></ul><p><span >The fee structure, referred to as “</span><a target="_blank" rel="noreferrer" href="https://bakerxchange.com/rv/ff006f7c7b62ef24f8393f7d054ca75f27031970/p=7811295"><u><span style="color: rgb(17, 85, 204)">costs for environmental control</span></u></a><span >,” was established by the Decentralized Service Environmental Services for Ecosocialism (SAEC), with fees to be paid in “Petro” (Venezuelans Sovereign Crypto-Asset).&nbsp;</span></p><p></p><h3 class="font-bold"><strong>EPR for Packaging in Chile</strong></h3><img src="https://packmedia54032-staging.s3.amazonaws.com/public/chileEPR.jpg"><p><span >Chile’s EPR program for packaging dates back to 2016 with </span><a target="_blank" rel="noreferrer" href="https://erp-recycling.org/news-and-events/2023/10/chile-is-your-company-affected-by-the-recent-changes/#:~:text=20.920%20of%202016.-,In%20Chile%2C%20extended%20producer%20responsibility%20(EPR)%20for%20various%20priority,2021%2C%20the%20Supreme%20Decree%20No."><u><span style="color: rgb(17, 85, 204)">Law 20.920</span></u></a><span >—Framework for Waste Management, Extended Producer Responsibility and Promotion of Recycling. Law 20.920 includes a number of mandates including making producers responsible for developing, implementing, and managing packaging waste collection programs and reaching recovery targets for identified packaging materials.&nbsp;</span></p><p><span >Chile’s EPR program </span><a target="_blank" rel="noreferrer" href="https://erp-recycling.org/news-and-events/2023/10/chile-is-your-company-affected-by-the-recent-changes/#:~:text=20.920%20of%202016.-,In%20Chile%2C%20extended%20producer%20responsibility%20(EPR)%20for%20various%20priority,2021%2C%20the%20Supreme%20Decree%20No."><u><span style="color: rgb(17, 85, 204)">covers companies</span></u></a><span > that “place consumer goods that are packaged with cardboard for liquids, metal, paper and cardboard, plastic or glass onto the domestic market.” Identified producers are responsible for registering with the Pollutant Release and Transfer Register System, managing and financing collection of packaging waste in Chile, and complying with set turrets for collection and recovery of different types of packaging waste. Producers are also responsible for </span><a target="_blank" rel="noreferrer" href="https://www.loraxcompliance.com/blog/env/2021/07/26/EPR_in_Latin_America_-_Progress_toward_implementation.html#"><u><span style="color: rgb(17, 85, 204)">annually declaring</span></u></a><span > “volumes of materials put onto the market.”&nbsp;</span></p><p><span >Similar to Venezuela’s EPR program, identified producers can submit EPR plans either individually or collectively. A </span><a target="_blank" rel="noreferrer" href="https://www.loraxcompliance.com/blog/env/2021/07/26/EPR_in_Latin_America_-_Progress_toward_implementation.html#"><u><span style="color: rgb(17, 85, 204)">Lorax EPI article</span></u><span style="color: rgb(17, 85, 204)"> </span></a><span >notes that Chile’s EPR program works to advance their 2025 targets set through being a member of the Ellen MacArthur Foundation’s global Plastics Pact network—including designing all plastic containers and packaging to be 100% reusable, recyclable, or compostable and increasing plastic reuse, recycling, and composting rates to 33%.&nbsp;</span></p><p></p><h3 class="font-bold"><strong>EPR for Packaging in Brazil</strong></h3><img src="https://packmedia54032-staging.s3.amazonaws.com/public/brazilEPR.jpg"><p><span >Brazil’s approach to EPR is unique when compared to their South American counterparts, as they utilize reserve logistics certificates to ensure proper waste management of packaging and packaging-related materials. The Brazilian government passed </span><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/pulse/reverse-logistics-certificates-brazils-approach-carbajosa/"><u><span style="color: rgb(17, 85, 204)">Decree No. 11,413</span></u></a><span > in April of 2023, establishing a reverse logistics certificate program in which producers are to establish reverse logistics systems for their packaging systems.&nbsp;</span></p><p><span >Decree No. 11,413’s reverse logistics certificates include the following:</span></p><p><span ><strong>CCRLR</strong> (Reverse Logistics Certificate): awarded to firms that meet EPR targets and show compliance with requirements related to reverse logistics.&nbsp;</span></p><p><span ><strong>CERE</strong> (Environmental Compensation Certificate): awarded to firms that exceed reverse logistics targets, opening up the possibility for these firms to trade or sell certificates to companies not currently reaching goals—a model similar to carbon markets.&nbsp;</span></p><p><span ><strong>Certificate of Credit for Future Mass</strong>: awarded to firms that meet targets and wish to save “excess recycling capacity” for future use, designed to provide flexibility and ease pains associated with shifting market conditions.&nbsp;</span></p><p><span >Identified producers are also required to report on progress in meeting reverse logistics targets to Brazil’s </span><a target="_blank" rel="noreferrer" href="https://www.gov.br/mre/en/subjects/sustainable-development-and-the-environment/environment-and-climate-change"><u><span style="color: rgb(17, 85, 204)">Ministry of Environment and Climate Change</span></u></a><span >, including data on collected waste volumes, recycling rates, and negative externalities. Similar to other EPR programs across the continent, Brazil allows for individual or collective models to meet and comply with the reserve logistics requirements of Decree No. 11,413.&nbsp;</span></p><p></p><h3 class="font-bold"><strong>EPR for Packaging in Peru</strong></h3><img src="https://packmedia54032-staging.s3.amazonaws.com/public/peruEPR.jpg"><p><span >Peru’s EPR program for packaging dates back to 2016 with their </span><a target="_blank" rel="noreferrer" href="https://apps1.unep.org/resolutions/uploads/peru_submission_inc_plastics_eng_rev.pdf"><u><span style="color: rgb(17, 85, 204)">Legislative Decree No. 1278</span></u></a><span >, referred to as the Law on Comprehensive Solid Waste Management (LGRIS). Decree No. 1278 is based on five principles including: circular economy, waste recovery, <strong>extended responsibility of the producer</strong>, shared responsibility, and protection of environment and public health. The decree covers many types of packaging including plastic, paper, metal, and more.&nbsp;</span></p><p><span >Peru’s EPR program works through </span><a target="_blank" rel="noreferrer" href="https://g20mpl.org/partners/peru#:~:text=In%20December%202017%2C%20its%20Regulations,comprehensive%20management%20of%20solid%20waste."><u><span style="color: rgb(17, 85, 204)">public/private partnerships</span></u></a><span >, in which the producers of packaging pay taxes based on the amount of products they put onto the market, and the Ministry of the Environment (</span><a target="_blank" rel="noreferrer" href="https://www.gob.pe/minam"><u><span style="color: rgb(17, 85, 204)">MINAM</span></u></a><span >) uses collected funds to revitalize Peru’s recycling and waste management infrastructure. A </span><a target="_blank" rel="noreferrer" href="https://www.wwf.org.pe/en/?328834/Almost-90-of-the-garbage-generated-daily-is-not-recycled"><u><span style="color: rgb(17, 85, 204)">WWF article</span></u></a><span > from 2018 highlights the fact that more than 18,000 tons of waste is generated daily in Peru, and 90% of that waste is not recycled. Initiatives like Decree No. 1278 are part of MINAM’s approach to boost recycling infrastructure and rates in the nation.</span></p><p><span >Two to three years after Decree. No 1278 was introduced, Peru introduced </span><a target="_blank" rel="noreferrer" href="https://apps1.unep.org/resolutions/uploads/peru_submission_inc_plastics_eng_rev.pdf"><u><span style="color: rgb(17, 85, 204)">Law No. 30884</span></u></a><span >. The law </span><a target="_blank" rel="noreferrer" href="https://g20mpl.org/partners/peru#:~:text=In%20December%202017%2C%20its%20Regulations,comprehensive%20management%20of%20solid%20waste."><u><span style="color: rgb(17, 85, 204)">bans single-use plastics</span></u></a><span > including bags, plastic straws, and expanded polystyrene in food and beverage applications in a number of locations across the nation, including:&nbsp;</span></p><ul><li ><p><span >Natural protected areas&nbsp;</span></p></li><li ><p><span >National historical and heritage sites&nbsp;</span></p></li><li ><p><span >Museums&nbsp;</span></p></li><li ><p><span >Pacific Ocean beaches&nbsp;</span></p></li><li ><p><span >Amazon Basin beaches&nbsp;</span></p></li><li ><p><span >Public entities&nbsp;</span></p></li></ul><p></p><h3 class="font-bold"><strong>EPR for Packaging in Uruguay</strong></h3><img src="https://packmedia54032-staging.s3.amazonaws.com/public/uruguayEPR.jpg"><p><span >The nation of Uruguay launched their EPR program for packaging in 2007 with </span><a target="_blank" rel="noreferrer" href="https://g20mpl.org/partners/uruguay#:~:text=It%20uses%20the%20concept%20of,271/2021:"><u><span style="color: rgb(17, 85, 204)">Decree No. 260/007</span></u></a><span > which is an addition to Law No. 17849 (Packaging Recycling Law - 2004). Decree No. 260/007 seeks to reduce the generation of waste related to packaging of all types and promote reuse, recycling, composting, and more through an EPR program. Uruguay’s EPR program calls for identified producers to have management plans for packaging produced in the Uruguay market and its waste. The program is managed by the </span><a target="_blank" rel="noreferrer" href="https://www.gub.uy/ministerio-ambiente/"><u><span style="color: rgb(17, 85, 204)">Ministry of Environment</span></u></a><span >.&nbsp;</span></p><p><span >In April of 2021, the Ministry of Environment </span><a target="_blank" rel="noreferrer" href="https://g20mpl.org/partners/uruguay#:~:text=It%20uses%20the%20concept%20of,271/2021:"><u><span style="color: rgb(17, 85, 204)">added two resolutions</span></u></a><span > to the Decree—271/2021 and 272/2021.&nbsp;</span></p><p><span ><strong>Resolution 271/2021</strong> works to boost levels of material recovery and mandates that manufacturers and importers of packaging and packaging-related materials create and submit collection plans. The recovery targets for packaging materials will increase gradually, with the first target of 50% by December 31, 2025. Part of the Resolution is </span><a target="_blank" rel="noreferrer" href="https://g20mpl.org/partners/uruguay#:~:text=It%20uses%20the%20concept%20of,271/2021:"><u><span style="color: rgb(17, 85, 204)">Article 6</span></u></a><span >, in which identified producers of packaged products must design containers and packaging that “favor and ensure adequate recovery for the recycling of high-quality materials, in which the material obtained can be entered as a substitute for raw materials to produce containers again.” Under Article 6, producers must also “include strategies to reduce the weight of the materials in the packaging in which their products are presented and to favor the use of returnable and reusable containers whenever possible.”</span></p><p><span ><strong>Resolution 272/2021</strong> mandates an “environmental seal” designed to allow select sectors (gastronomy, hotels, etc.) to “reduce the use of plastics.” The Resolution also bans the use of plastic straws; this came into effect December 31, 2022.&nbsp;</span></p><h3 class="font-bold"><span ><strong>How to Prepare for EPR</strong></span></h3><p><span >Beyond the South American continent, EPR programs that include packaging in their scope are developing all around the world. To stay compliant with existing and emerging EPR laws, it is important to strive to develop an understanding of a packaging system’s life cycle—from cradle to grave. And at the Packaging School, we have the tools to help you do just that!&nbsp;</span></p><p><span >We offer a </span><a target="_blank" rel="noreferrer" href="https://packagingschool.com/certifications/get-to-know-csp"><u><span style="color: rgb(17, 85, 204)"><strong>Certificate of Sustainable Packaging (CSP)</strong></span></u></a><span >, designed to get you up to speed on sustainable packaging design, measurement, and strategy—including an interactive module exploring a life cycle assessment (LCA) software designed for packaging.&nbsp;</span></p><p><span >Learn more about our 40-hour, 100% online certificate program </span><a target="_blank" rel="noreferrer" href="https://packagingschool.com/certifications/get-to-know-csp"><u><span style="color: rgb(17, 85, 204)"><strong>here</strong></span></u></a><span >!</span></p>',
        createdAt: '2024-05-14T20:19:31.533Z',
        id: 'e85e7079-0c5b-4bff-a619-85a5147aa1ad',
        media:
          'https://packmedia54032-staging.s3.amazonaws.com/public/saeprherojpg',
        objectives: [],
        screengrab: null,
        seoImage:
          'https://packmedia54032-staging.s3.amazonaws.com/public/saeprherojpg',
        slug: 'epr-for-packaging-in-south-america',
        status: 'PUBLISHED',
        subhead:
          'In this blog we explore the extended producer responsibility (EPR) programs that include packaging in their scope in the continent of South America --- including Brazil, Colombia, Venezeula, Peru, Uruguay, and Chile. We explore how packaging waste is managed, funded, and collected in 6 nations and how to prepare your business for these laws. ',
        tags: {
          items: [
            {
              id: '9c86fb97-27e2-4e18-8115-8ff17ffc9386',
              tags: {
                id: '2737e889-0f42-43fd-9e42-9565eb79a1c7',
                tag: 'regulations',
              },
            },
            {
              id: 'd55830c6-de9b-4b7a-af95-33f025363780',
              tags: {
                id: '70fa67d0-03ef-4c90-81e6-1fbac16941b7',
                tag: 'epr',
              },
            },
            {
              id: '5baf5d81-c8a3-4a31-a67f-0358d6352b63',
              tags: {
                id: 'c40b6968-cda6-49a5-85b7-19f570fba7c5',
                tag: 'waste',
              },
            },
          ],
        },
        title: 'EPR for Packaging in South America',
        type: 'REGULATORY',
        videoLink: null,
      },
    },
    view: () => {},
    authors: ['Mitch Webster', 'Alli Keigley'],
  },
};

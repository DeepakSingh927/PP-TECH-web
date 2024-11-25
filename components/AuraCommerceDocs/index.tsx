import SidebarLink from "@/components/Home/Docs/SidebarLink";
import { Metadata } from "next";
import ACDSidebarLink from "./ACDSidebarLink";

export const metadata: Metadata = {
  title: "Docs Page - Solid SaaS Boilerplate",
  description: "This is Docs page for Solid Pro",
  // other metadata
};

export default function DocsPage() {
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4  transition-all  dark:border-strokedark dark:bg-blacksection">
                <ul className="space-y-2">
                  <ACDSidebarLink />
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              {/*Introduction Starts*/}
              <div
                id="Introduction"
                className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              >
                <h2>Welcome to Aura Commerce Documentation</h2>

                <p className="text-body-color dark:text-body-color-dark text-base">
                  Welcome to the Aura Commerce Theme, a flexible and
                  feature-rich Shopify theme designed to enhance your store's
                  functionality and visual appeal. This documentation provides
                  an overview of the theme’s sections and their capabilities,
                  ensuring you can fully utilize its potential.
                </p>
              </div>
              {/*Introduction Ends*/}

              {/*Theme Installation Guide Starts*/}
              <div
                id="ThemeInstallationGuide"
                className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              >
                <h2>Aura Commerce Theme Installation Guide</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  Follow these simple steps to install and set up the Aura
                  Commerce Theme on your Shopify store:
                </p>

                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Step 1: Download the Theme File
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-disc pt-4">
                    Log in to your Shopify admin panel.
                  </li>
                  <li className="list-disc pt-4">
                    Purchase or download the Aura Commerce Theme file from your
                    source (Shopify Theme Store or third-party provider).
                  </li>
                  <li className="list-disc pt-4">
                    Save the <code>.zip</code> file to your computer.
                  </li>
                </ul>

                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Step 2: Upload the Theme
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-disc pt-4">
                    In your Shopify admin, navigate to{" "}
                    <b>Online Store &gt; Themes</b>.
                  </li>
                  <li className="list-disc pt-4">
                    Click the <b>Upload Theme</b> button located in the
                    top-right corner.
                  </li>
                  <li className="list-disc pt-4">
                    Select the downloaded <code>.zip</code> file and click{" "}
                    <b>Upload</b>.
                  </li>
                  <li className="list-disc pt-4">
                    Once uploaded, the theme will appear under the{" "}
                    <b>Theme Library</b> section.
                  </li>
                </ul>

                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Step 3: Publish the Theme
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-disc pt-4">
                    In the <b>Theme Library</b>, locate the Aura Commerce Theme.
                  </li>
                  <li className="list-disc pt-4">
                    Click the <b>Actions</b> dropdown menu next to the theme.
                  </li>
                  <li className="list-disc pt-4">
                    Select <b>Publish</b> to make the theme live on your store.
                  </li>
                  <li className="list-disc pt-4">
                    Confirm the action when prompted.
                  </li>
                </ul>
              </div>
              {/*Theme Installation Guide Ends*/}

              {/*Theme Customisation Starts*/}
              <div
                id="ThemeCustomizationGuide"
                className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              >
                <h2>Theme Customization</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  Follow these steps to customize your theme and make it align
                  with your brand identity:
                </p>

                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-disc pt-4">
                    Go to <b>Online Store &gt; Themes</b>, and under{" "}
                    <b>Current Theme</b>, click <b>Customize</b>.
                  </li>
                  <li className="list-disc pt-4">Use the theme editor to:</li>
                  <ul className="list-disc pl-5 pt-4">
                    <li>
                      Add sections such as <b>Slideshow</b>,{" "}
                      <b>Shop by Collection</b>, and <b>Rich Text</b> to your
                      homepage.
                    </li>
                    <li>
                      Customize colors, fonts, and layouts to match your brand
                      identity.
                    </li>
                    <li>
                      Set up banners, product grids, and dynamic features like{" "}
                      <b>You May Also Like</b> and <b>Testimonials</b>.
                    </li>
                  </ul>
                  <li className="list-disc pt-4">
                    Save changes as you customize your theme.
                  </li>
                </ul>
              </div>
              {/*Theme Customisation Ends*/}

              {/*Theme Configuration Starts*/}
              <div
                id="ThemeConfigurationGuide"
                className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              >
                <h2>Theme Configuration</h2>

                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Step 1: Configure Theme Settings
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-disc pt-4">
                    Navigate to <b>Theme Settings</b> in the theme editor.
                  </li>
                  <li className="list-disc pt-4">
                    Adjust global settings, such as:
                  </li>
                  <ul className="list-disc pl-5 pt-4">
                    <li>Colors and typography for a cohesive brand look.</li>
                    <li>
                      Header and footer configuration for navigation and contact
                      details.
                    </li>
                    <li>
                      Enable or disable key features like{" "}
                      <b>Announcement Bar</b>, <b>Marquee Section</b>, or{" "}
                      <b>WhatsApp Button</b>.
                    </li>
                  </ul>
                </ul>

                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Step 2: Test Your Theme
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-disc pt-4">
                    Preview your store on desktop and mobile devices to ensure
                    everything looks perfect.
                  </li>
                  <li className="list-disc pt-4">
                    Test features like sliders, buttons, quick view, and
                    add-to-cart functionality.
                  </li>
                  <li className="list-disc pt-4">
                    Verify links, forms, and any integrated tools (e.g.,
                    WhatsApp) are working correctly.
                  </li>
                </ul>

                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Step 3: Go Live
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-disc pt-4">
                    Once you’re satisfied with the customization and
                    functionality, ensure your store is ready for launch.
                  </li>
                  <li className="list-disc pt-4">
                    Announce your new theme to customers through email or social
                    media to create excitement.
                  </li>
                </ul>
              </div>
              {/*Theme Configuration Endss*/}

              {/*Announcement Bar Starts*/}
              <div
                id="AnnouncementBarSection"
                className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              >
                <h2>Announcement Bar Section</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  The Announcement Bar Section is a prominent and customizable
                  feature designed to highlight important messages, promotions,
                  or updates at the top of your Shopify store. This section
                  ensures customers immediately notice key announcements upon
                  visiting your site.
                </p>
                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Key Features
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-none">
                    <b>Attention-Grabbing Placement:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Positioned at the top of your store for maximum
                        visibility.
                      </li>
                      <li>
                        Stays fixed or scrolls with the page, based on your
                        preference.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Customizable Text:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Add short and impactful messages, such as promotions,
                        shipping details, or holiday announcements.
                      </li>
                      <li>
                        Option to display dynamic content like discount codes or
                        links.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Clickable Links (Optional):</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Add links to redirect customers to specific pages,
                        collections, or promotions.
                      </li>
                      <li>
                        Perfect for guiding users to sales, new arrivals, or
                        policy updates.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Multi-Message Scrolling:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Enable multiple announcements to rotate automatically in
                        a scrolling or sliding format.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Styling Options:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Customize font styles, colors, and background to align
                        with your store’s branding.
                      </li>
                      <li>Add icons or emojis for extra visual appeal.</li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Responsive Design:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Optimized for desktop and mobile devices to maintain
                        visibility across all platforms.
                      </li>
                    </ul>
                  </li>
                </ul>

                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Customization Options
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-none">
                    <b>Message Content:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Add multiple announcements with separate links and
                        styles for each message.
                      </li>
                      <li>
                        Set the display order and visibility for different
                        announcements.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Scrolling and Animation:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Choose from scrolling, sliding, or static display
                        styles.
                      </li>
                      <li>
                        Adjust animation speed and transition effects for a
                        polished look.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Background and Text Styling:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Customize the bar’s background color, text color, and
                        font.
                      </li>
                      <li>
                        Add gradients or images to enhance the announcement
                        bar's design.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Positioning:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Keep the bar fixed at the top of the page or allow it to
                        scroll with the content.
                      </li>
                      <li>Optionally hide the bar on specific pages.</li>
                    </ul>
                  </li>
                </ul>

                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Best Practices
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li>
                    Keep the message concise and impactful to grab attention
                    quickly.
                  </li>
                  <li>
                    Highlight time-sensitive promotions, free shipping
                    thresholds, or store updates.
                  </li>
                  <li>
                    Test the bar’s visibility on both desktop and mobile
                    devices.
                  </li>
                  <li>
                    Update the announcement regularly to keep it relevant and
                    engaging.
                  </li>
                </ul>

                <h4 className="mb-8 mt-4 text-lg font-semibold">Use Cases</h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li>
                    Announce ongoing sales or discount codes (e.g., "Get 20% off
                    with code SAVE20").
                  </li>
                  <li>
                    Promote free shipping offers (e.g., "Free Shipping on Orders
                    Over $50").
                  </li>
                  <li>
                    Share holiday hours or special events (e.g., "Black Friday
                    Sale Starts Now!").
                  </li>
                  <li>
                    Inform customers about policy changes or shipping delays.
                  </li>
                </ul>
              </div>

              {/*Announcement Bar Ends*/}

              {/*Slideshow Section Starts*/}
              <div
                id="SlideshowSection"
                className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              >
                <h2>Slideshow Section</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  The Slideshow Section allows you to create an engaging visual
                  display on your Shopify storefront. This versatile section is
                  ideal for showcasing promotions, featured collections, or
                  brand stories with images and videos.
                </p>
                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Key Features
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-none">
                    <b>Image and Video Support:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Upload high-quality images or embed videos for both
                        desktop and mobile views.
                      </li>
                      <li>
                        Ensure optimal responsiveness for various screen sizes,
                        delivering a seamless user experience.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Customizable Text:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Add a compelling heading to grab your audience’s
                        attention.
                      </li>
                      <li>
                        Include a brief description to provide additional
                        context or highlight key features of your offerings.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Call-to-Action (CTA) Button:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Add a customizable button to direct users to a specific
                        page (e.g., a product collection, blog, or promotional
                        page).
                      </li>
                      <li>
                        Modify the button text and link to suit your marketing
                        goals.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Layout Flexibility:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Configure individual slides for desktop and mobile to
                        provide tailored content for different devices.
                      </li>
                      <li>
                        Adjust the order and visibility of slides to prioritize
                        key messages.
                      </li>
                    </ul>
                  </li>
                </ul>
                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Customization Options
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-none">
                    <b>Heading & Description:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Input your preferred heading text and description
                        directly in the settings.
                      </li>
                      <li>
                        Style the typography to align with your brand identity.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Media Upload:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Add up to 5 slides with options to include either an
                        image or a video for each.
                      </li>
                      <li>
                        Use the settings panel to adjust image alignment or
                        enable autoplay for videos.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>CTA Button:</b>
                    <ul className="list-disc pt-4">
                      <li>Enable or disable the button for each slide.</li>
                      <li>Link the button to any internal or external page.</li>
                    </ul>
                  </li>
                </ul>
                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Best Practices
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li>
                    Use high-quality images or videos that reflect your brand
                    aesthetic and resonate with your target audience.
                  </li>
                  <li>
                    Keep the text concise to maintain focus on the visuals.
                  </li>
                  <li>
                    Ensure the CTA is clear and actionable (e.g., "Shop Now" or
                    "Explore More").
                  </li>
                  <li>
                    Optimize for mobile by previewing and customizing
                    mobile-specific media and text.
                  </li>
                </ul>
              </div>
              {/*Slideshow Section Ends*/}

              {/*Marquee Text Section Starts*/}
              <div
                id="MarqueeSection"
                className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              >
                <h2>Marquee Section</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  The Marquee Section is a dynamic and eye-catching feature that
                  continuously scrolls content across the screen. It is perfect
                  for showcasing brand highlights, features, or key messages in
                  a visually engaging way, adding movement and energy to your
                  store.
                </p>
                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Key Features
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-none">
                    <b>Scrolling Content:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Display a series of text items, icons, or small images
                        in a continuous horizontal scroll.
                      </li>
                      <li>
                        Perfect for emphasizing unique selling points (USPs),
                        product features, or brand values.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Customizable Content:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Add multiple items such as text, emojis, or icons.
                      </li>
                      <li>
                        Customize the style and order of items to suit your
                        store’s branding.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Speed and Direction Control:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Adjust the scrolling speed for a slower or faster
                        effect.
                      </li>
                      <li>
                        Set the scrolling direction to left-to-right or
                        right-to-left.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Responsive Design:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Ensure the marquee adapts seamlessly to different screen
                        sizes for an optimal experience across desktop and
                        mobile devices.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Background Options:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Add a solid background, gradient, or image to enhance
                        the marquee's visual appeal.
                      </li>
                      <li>
                        Adjust text or icon color to maintain readability.
                      </li>
                    </ul>
                  </li>
                </ul>
                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Customization Options
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-none">
                    <b>Text and Icon Settings:</b>
                    <ul className="list-disc pt-4">
                      <li>Add or edit text and icons for the marquee.</li>
                      <li>
                        Choose font styles, sizes, and colors to align with your
                        store’s design.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Scrolling Behavior:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Adjust speed, direction, and loop settings for a smooth
                        scrolling experience.
                      </li>
                      <li>Enable or disable the scroll pause on hover.</li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Background and Borders:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Customize the marquee background color or pattern.
                      </li>
                      <li>
                        Add borders or spacing to separate the marquee from
                        other sections.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Alignment and Spacing:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Adjust padding and margins for a clean and structured
                        layout.
                      </li>
                      <li>
                        Align the content centrally or towards the edges for
                        stylistic flexibility.
                      </li>
                    </ul>
                  </li>
                </ul>
                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Best Practices
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li>
                    Use concise and impactful text to ensure the marquee is
                    easily readable.
                  </li>
                  <li>
                    Highlight your brand’s USPs (e.g., "Free Shipping,"
                    "Sustainable Materials") or feature promotional messages.
                  </li>
                  <li>
                    Avoid overcrowding the marquee with too much content to
                    maintain clarity.
                  </li>
                  <li>
                    Test the scrolling speed to ensure it’s neither too slow nor
                    too distracting.
                  </li>
                </ul>
              </div>
              {/*Marquee Text Section Ends*/}

              {/*Shop By Collection Starts*/}
              <div
                id="ShopByCollectionSection"
                className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              >
                <h2>Shop By Collection Section</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  The Shop By Collection Section provides an interactive and
                  visually appealing way for customers to explore your product
                  collections. This section is designed to enhance the shopping
                  experience by allowing users to seamlessly browse and preview
                  products within categorized collections.
                </p>
                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Key Features
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-none">
                    <b>Collection Tabs:</b>
                    <ul className="list-disc pt-4">
                      <li>Display multiple collections in a tabbed layout.</li>
                      <li>
                        Customers can switch between collections without leaving
                        the section.
                      </li>
                      <li>
                        Each tab is labeled with the collection name, making
                        navigation intuitive.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Product Slider:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        A responsive slider showcases products from the selected
                        collection.
                      </li>
                      <li>
                        Smooth sliding animations ensure an enjoyable browsing
                        experience.
                      </li>
                      <li>
                        Display multiple products per slide, with dynamic
                        adjustments for desktop and mobile views.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Quick View on Hover:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Hovering over a product displays key details such as
                        price, discount, and a "Quick View" option.
                      </li>
                      <li>
                        The Quick View modal allows customers to preview product
                        information and add items to their cart without
                        navigating to the product page.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Discount Badges:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Highlight promotional discounts directly on product
                        thumbnails.
                      </li>
                      <li>
                        Automatically calculate and display percentage discounts
                        to draw attention to offers.
                      </li>
                    </ul>
                  </li>
                </ul>
                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Customization Options
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-none">
                    <b>Collection Selection:</b>
                    <ul className="list-disc pt-4">
                      <li>Select which collections to display in the tabs.</li>
                      <li>
                        Reorder the tabs to prioritize specific collections.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Slider Settings:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Configure the number of products displayed per slide.
                      </li>
                      <li>Enable or disable autoplay for the slider.</li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Quick View Options:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Customize the information shown in the Quick View modal
                        (e.g., product description, variant options, etc.).
                      </li>
                      <li>
                        Enable or disable the Quick View feature as needed.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Styling Options:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Adjust the font, color, and spacing for collection tabs
                        and product details.
                      </li>
                      <li>
                        Add custom padding and margins for better alignment with
                        your theme.
                      </li>
                    </ul>
                  </li>
                </ul>
                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Best Practices
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li>
                    Use high-quality images for product thumbnails to capture
                    customer interest.
                  </li>
                  <li>
                    Ensure the most popular or promotional collections are
                    prioritized in the tabs.
                  </li>
                  <li>
                    Keep the Quick View modal concise and focused on key product
                    details to encourage conversions.
                  </li>
                </ul>
              </div>
              {/*Shop By Collection Endss*/}

              {/*Featured Collection Starts*/}
              <div
                id="FeaturedCollectionSection"
                className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              >
                <h2>Featured Collection Section</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  The Featured Collection Section is designed to highlight a
                  specific collection of products, enabling merchants to
                  showcase bestsellers, new arrivals, or any targeted product
                  selection. This section comes with a dynamic slider and
                  customizable layout options.
                </p>
                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Key Features
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-none">
                    <b>Heading Layout Options:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        <b>Top Aligned:</b> Display the section heading centered
                        above the product slider for a clean, traditional look.
                      </li>
                      <li>
                        <b>Left Aligned:</b> Place the heading on the left side
                        for a modern and distinctive layout.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Product Slider:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        A smooth, responsive slider displays products from the
                        selected collection.
                      </li>
                      <li>
                        Adjustable settings to control the number of products
                        per slide.
                      </li>
                      <li>
                        Works seamlessly across desktop and mobile devices for
                        optimal user experience.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>View All Button:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Include a customizable button that directs users to the
                        complete collection.
                      </li>
                      <li>
                        Modify the button text to suit your branding (e.g.,
                        "Explore Collection" or "Shop Now").
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Discount Badges:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Highlight product discounts with percentage-off badges.
                      </li>
                      <li>
                        Automatically calculate and display the discount for
                        better customer engagement.
                      </li>
                    </ul>
                  </li>
                </ul>
                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Customization Options
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-none">
                    <b>Heading Styles:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Select the alignment of the heading (top or left).
                      </li>
                      <li>
                        Customize the font style, size, and color to match your
                        store theme.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Product Selection:</b>
                    <ul className="list-disc pt-4">
                      <li>Choose the collection to display in the slider.</li>
                      <li>Enable or disable specific products if needed.</li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Slider Settings:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Configure autoplay and speed settings for the slider.
                      </li>
                      <li>Set the number of products to display per slide.</li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>View All Button:</b>
                    <ul className="list-disc pt-4">
                      <li>Toggle the button on or off.</li>
                      <li>Link it to any page, collection, or external URL.</li>
                    </ul>
                  </li>
                </ul>
                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Best Practices
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li>
                    Feature collections that align with seasonal trends,
                    promotions, or customer favorites.
                  </li>
                  <li>
                    Use high-quality product images to capture attention and
                    drive clicks.
                  </li>
                  <li>
                    Test both heading layouts to determine which best suits your
                    store’s design and audience.
                  </li>
                </ul>
              </div>
              {/*Featured Collection Ends*/}

              {/*Promotional Banners Starts*/}
              <div
                id="PromotionalBannersSection"
                className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              >
                <h2>Promotional Banners Section</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  The Promotional Banners Section is a visually striking feature
                  designed to highlight promotions, seasonal campaigns, or any
                  key content through customizable, clickable banners. This
                  section employs a 2-column layout for better organization and
                  aesthetic appeal.
                </p>
                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Key Features
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-none">
                    <b>Two-Column Layout:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Displays two banners side by side, creating a balanced
                        and engaging design.
                      </li>
                      <li>
                        Perfect for showcasing two distinct promotions or
                        highlighting categories simultaneously.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Clickable Banners:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Each banner is fully clickable and can link to any
                        internal or external page.
                      </li>
                      <li>
                        Ideal for directing users to specific collections,
                        products, or landing pages.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Customizable Content:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Upload high-quality images for each banner to align with
                        your campaign or brand identity.
                      </li>
                      <li>
                        Add alternative text for better accessibility and SEO
                        benefits.
                      </li>
                    </ul>
                  </li>
                </ul>
                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Customization Options
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-none">
                    <b>Banner Images:</b>
                    <ul className="list-disc pt-4">
                      <li>Upload unique images for each banner.</li>
                      <li>
                        Optimize image size and quality for faster load times
                        and better visual impact.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Clickable Links:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Assign individual links to each banner for tailored user
                        navigation.
                      </li>
                      <li>Use the settings panel to easily update URLs.</li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Styling Options:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Adjust the padding, margins, and spacing between
                        banners.
                      </li>
                      <li>
                        Customize hover effects for a more dynamic user
                        experience.
                      </li>
                    </ul>
                  </li>
                </ul>
                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Best Practices
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li>
                    Use bold and eye-catching visuals to capture user attention.
                  </li>
                  <li>
                    Ensure the images align with your brand’s aesthetic and
                    current promotional campaigns.
                  </li>
                  <li>
                    Test the clickable links to ensure they lead to the intended
                    destinations.
                  </li>
                  <li>
                    Use contrasting text or overlay (if added) to make any
                    message or CTA on the banner more readable.
                  </li>
                </ul>
                <h4 className="mb-8 mt-4 text-lg font-semibold">Use Cases</h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li>
                    Highlight seasonal promotions such as holiday sales or
                    limited-time offers.
                  </li>
                  <li>
                    Showcase two distinct product categories (e.g., men’s and
                    women’s collections).
                  </li>
                  <li>Promote special collaborations or events.</li>
                </ul>
              </div>
              {/*Promotional Banners Ends*/}

              {/*Shop By Category Starts*/}
              <div
                id="ShopByCategorySection"
                className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              >
                <h2>Shop By Category Section</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  The Shop By Category Section is designed to provide customers
                  with an intuitive and visually appealing way to browse through
                  product categories. This section highlights specific
                  categories with a dynamic slider and customizable category
                  labels.
                </p>
                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Key Features
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-none">
                    <b>Category Slider:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        A responsive slider to showcase categories with
                        associated visuals.
                      </li>
                      <li>
                        Smooth navigation with arrow controls for effortless
                        browsing.
                      </li>
                      <li>Optimized for desktop and mobile screens.</li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Category Name Display:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Clearly label each category below the corresponding
                        image for easy identification.
                      </li>
                      <li>
                        Customize the font and style to match your store's
                        branding.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Clickable Categories:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Each category is fully clickable and links directly to
                        the corresponding collection page.
                      </li>
                      <li>
                        Enhance user navigation by guiding them to relevant
                        product collections.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Customizable Layout:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Configure the number of categories displayed per slide.
                      </li>
                      <li>
                        Adjust the spacing and alignment to fit seamlessly with
                        your store's design.
                      </li>
                    </ul>
                  </li>
                </ul>
                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Customization Options
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-none">
                    <b>Category Images:</b>
                    <ul className="list-disc pt-4">
                      <li>Upload unique images for each category.</li>
                      <li>
                        Ensure high-quality visuals to create a professional and
                        engaging appearance.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Category Names:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Add or edit the category labels displayed under each
                        image.
                      </li>
                      <li>
                        Use the settings to modify font style, size, and color.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Slider Settings:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Set autoplay options, slide speed, and the number of
                        categories visible per slide.
                      </li>
                      <li>
                        Enable or disable the slider arrows for navigation.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Responsive Design:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Optimize the layout for mobile and desktop views by
                        adjusting the number of categories displayed per row.
                      </li>
                    </ul>
                  </li>
                </ul>
                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Best Practices
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li>
                    Use vibrant and relevant images to represent each category.
                  </li>
                  <li>
                    Highlight the most popular or seasonal categories to draw
                    customer interest.
                  </li>
                  <li>
                    Test all clickable links to ensure they redirect to the
                    correct collection pages.
                  </li>
                  <li>
                    Maintain a consistent style for category names and images to
                    reinforce brand identity.
                  </li>
                </ul>
                <h4 className="mb-8 mt-4 text-lg font-semibold">Use Cases</h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li>
                    Showcase different product categories such as "Men's Wear,"
                    "Women's Wear," or "Accessories."
                  </li>
                  <li>
                    Highlight seasonal collections like "Winter Specials" or
                    "Summer Trends."
                  </li>
                  <li>
                    Promote specific product lines to drive traffic to targeted
                    categories.
                  </li>
                </ul>
              </div>
              {/*Shop By Category Ends*/}

              {/*About Us Section Starts*/}
              <div
                id="AboutUsSection"
                className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              >
                <h2>About Us Section</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  The About Us Section provides a dedicated space to showcase
                  your brand's story, values, and mission. This section allows
                  merchants to build a connection with their audience by sharing
                  what makes their store unique.
                </p>
                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Key Features
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-none">
                    <b>Image and Text Layout:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        A visually balanced layout featuring an image on one
                        side and text on the other.
                      </li>
                      <li>
                        Perfect for sharing your brand's personality while
                        visually engaging customers.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Customizable Content:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Add a compelling headline, description, and supporting
                        images.
                      </li>
                      <li>
                        Highlight your brand values, story, or mission to create
                        an emotional connection with your audience.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>"Read More" Button:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Include a customizable call-to-action (CTA) button that
                        redirects users to a dedicated About Us page.
                      </li>
                      <li>
                        Modify the button text and link to suit your brand's
                        messaging.
                      </li>
                    </ul>
                  </li>
                </ul>
                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Customization Options
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-none">
                    <b>Heading and Description:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Customize the headline text to reflect your brand tone
                        and identity.
                      </li>
                      <li>
                        Adjust the description to share your brand story or
                        values in a concise and engaging manner.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Image Upload:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Add high-quality images that represent your brand or
                        products.
                      </li>
                      <li>
                        Adjust the image alignment to suit your store design.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>CTA Button:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Customize the button text (e.g., "Learn More" or "Our
                        Story").
                      </li>
                      <li>
                        Link the button to your full About Us page or any other
                        relevant page.
                      </li>
                    </ul>
                  </li>
                </ul>
                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Best Practices
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li>
                    Use authentic and relatable images to establish trust and
                    credibility.
                  </li>
                  <li>
                    Keep the description concise while focusing on the most
                    impactful aspects of your brand story.
                  </li>
                  <li>
                    Ensure the "Read More" button directs customers to a
                    detailed and engaging About Us page.
                  </li>
                </ul>
                <h4 className="mb-8 mt-4 text-lg font-semibold">Use Cases</h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li>
                    Share your brand journey, mission, and vision to create a
                    personal connection with customers.
                  </li>
                  <li>
                    Highlight your commitment to sustainability, craftsmanship,
                    or other key values.
                  </li>
                  <li>
                    Use this section to introduce your team, brand milestones,
                    or customer success stories.
                  </li>
                </ul>
              </div>
              {/*About Us Section Ends*/}

              {/*Reel Video Section Starts*/}
              <div
                id="ReelVideoSection"
                className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              >
                <h2>Reel Video Section</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  The Reel Video Section is an interactive and visually dynamic
                  feature designed to highlight influencer picks, promotional
                  videos, or product reels. It combines video and image sliders
                  with autoplay functionality for a modern, engaging shopping
                  experience.
                </p>
                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Key Features
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-none">
                    <b>Video and Image Slider:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Showcase a mix of videos and images in a slider format.
                      </li>
                      <li>
                        Highlight influencer content, product showcases, or
                        campaigns.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Autoplay Feature:</b>
                    <ul className="list-disc pt-4">
                      <li>Enable videos to play automatically when in view.</li>
                      <li>
                        Create a seamless and engaging experience for customers.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Name and Link Options:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Add descriptive names to each reel or video for better
                        identification.
                      </li>
                      <li>
                        Link each reel to a specific product, collection, or
                        external page to drive conversions.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Navigation Controls:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Include arrows for manual navigation, allowing users to
                        scroll through the content.
                      </li>
                      <li>
                        Optional dots or pagination indicators for better
                        usability.
                      </li>
                    </ul>
                  </li>
                </ul>
                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Customization Options
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-none">
                    <b>Media Upload:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Upload multiple videos or images to create a captivating
                        reel.
                      </li>
                      <li>
                        Adjust the order of media items based on your campaign
                        priorities.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Autoplay Settings:</b>
                    <ul className="list-disc pt-4">
                      <li>Toggle autoplay on or off.</li>
                      <li>Customize autoplay speed and loop options.</li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Name and Links:</b>
                    <ul className="list-disc pt-4">
                      <li>Assign unique names for each reel or video.</li>
                      <li>
                        Add clickable links to redirect customers to relevant
                        pages.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Styling Options:</b>
                    <ul className="list-disc pt-4">
                      <li>Customize slider dimensions and spacing.</li>
                      <li>
                        Adjust text alignment, font styles, and colors for reel
                        names.
                      </li>
                    </ul>
                  </li>
                </ul>
                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Best Practices
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li>
                    Use high-quality videos and images to create an immersive
                    and professional experience.
                  </li>
                  <li>
                    Highlight influencer collaborations or trending products to
                    boost engagement.
                  </li>
                  <li>
                    Test the autoplay feature for an optimal balance between
                    user engagement and content visibility.
                  </li>
                  <li>
                    Ensure all links are functional and direct users to relevant
                    pages.
                  </li>
                </ul>
                <h4 className="mb-8 mt-4 text-lg font-semibold">Use Cases</h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li>
                    Showcase influencer picks or testimonials to increase trust
                    and appeal.
                  </li>
                  <li>
                    Feature promotional reels for new collections or
                    limited-time offers.
                  </li>
                  <li>
                    Create a dynamic gallery of product videos to highlight
                    features and usage.
                  </li>
                </ul>
              </div>
              {/*Reel Video Section Ends*/}

              {/*Blog Section Starts*/}
              <div
                id="BlogPostSection"
                className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              >
                <h2>Blog Post Section</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  The Blog Post Section allows you to showcase the latest
                  articles or updates from your store’s blog directly on the
                  homepage. It is designed to keep your customers informed and
                  engaged while promoting your brand’s content strategy.
                </p>
                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Key Features
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-none">
                    <b>Dynamic Blog Display:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Displays a curated selection of your latest or featured
                        blog posts.
                      </li>
                      <li>
                        Includes blog titles, summaries, and featured images for
                        each post.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Clickable Blog Links:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Each post links directly to its full article,
                        encouraging readers to explore more.
                      </li>
                      <li>Boosts blog traffic and user engagement.</li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Customizable Layout:</b>
                    <ul className="list-disc pt-4">
                      <li>Display posts in a grid or slider format.</li>
                      <li>Adjust the number of posts shown in the section.</li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Featured Images:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Each post’s featured image is displayed prominently,
                        making the section visually appealing and engaging.
                      </li>
                    </ul>
                  </li>
                </ul>
                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Customization Options
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-none">
                    <b>Blog Source:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Choose a specific blog from your store to display posts.
                      </li>
                      <li>
                        Update the source anytime to reflect different
                        categories or collections of articles.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Post Count:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Adjust the number of blog posts displayed (e.g., 3, 6,
                        or more).
                      </li>
                      <li>
                        Option to load more posts dynamically or link to the
                        full blog page.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Styling Options:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Customize font styles, colors, and spacing for blog
                        titles and summaries.
                      </li>
                      <li>
                        Adjust the layout to fit seamlessly with your store’s
                        design.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Link Options:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Add a "Read More" button or hyperlink to each post for
                        better navigation.
                      </li>
                      <li>Customize the text of the CTA button.</li>
                    </ul>
                  </li>
                </ul>
                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Best Practices
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li>
                    Feature posts that are relevant to current promotions,
                    seasonal trends, or product launches.
                  </li>
                  <li>
                    Use high-quality featured images to capture attention and
                    draw readers in.
                  </li>
                  <li>
                    Write concise and engaging summaries to encourage clicks on
                    the "Read More" link.
                  </li>
                  <li>
                    Ensure posts are updated regularly to keep the section fresh
                    and relevant.
                  </li>
                </ul>
                <h4 className="mb-8 mt-4 text-lg font-semibold">Use Cases</h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li>
                    Highlight your brand story, customer success stories, or
                    product usage guides.
                  </li>
                  <li>
                    Share tips, tutorials, or trends that align with your
                    products.
                  </li>
                  <li>
                    Promote announcements, upcoming events, or collaborations
                    with influencers.
                  </li>
                </ul>
              </div>
              {/*Blog Section Ends*/}

              {/*Testimonials Section Starts*/}
              <div
                id="TestimonialsSection"
                className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              >
                <h2>Testimonials Section</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  The Testimonials Section provides a platform to showcase
                  client feedback, helping to build trust and credibility for
                  your brand. This section is designed to highlight customer
                  reviews and ratings in an elegant, engaging layout.
                </p>
                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Key Features
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-none">
                    <b>Customer Testimonials:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Display multiple client reviews with their names,
                        ratings, and personalized feedback.
                      </li>
                      <li>
                        Each testimonial includes a heading, a short
                        description, and the customer’s name.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Star Ratings:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Highlight customer satisfaction using a star rating
                        system.
                      </li>
                      <li>
                        Visually appealing way to reinforce positive feedback.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Slider Format:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Present testimonials in a responsive slider for easy
                        navigation.
                      </li>
                      <li>Automatically or manually scroll through reviews.</li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Customizable Heading:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Add a section heading (e.g., "What Clients Say About
                        Us") to draw attention.
                      </li>
                    </ul>
                  </li>
                </ul>
                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Customization Options
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-none">
                    <b>Testimonials:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Add or edit testimonials, including customer names,
                        headings, and feedback.
                      </li>
                      <li>
                        Upload customer photos or icons (if available) to
                        personalize the section further.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Star Ratings:</b>
                    <ul className="list-disc pt-4">
                      <li>Enable or disable the star rating system.</li>
                      <li>
                        Customize the number of stars for each testimonial.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Slider Settings:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Adjust autoplay speed, navigation controls
                        (arrows/dots), and loop options.
                      </li>
                      <li>
                        Configure the number of testimonials displayed per slide
                        for desktop and mobile views.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Styling Options:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Customize fonts, colors, and spacing for headings and
                        testimonials.
                      </li>
                      <li>
                        Adjust the layout to match your store's overall design.
                      </li>
                    </ul>
                  </li>
                </ul>
                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Best Practices
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li>
                    Use authentic and varied testimonials to reflect different
                    aspects of your brand (e.g., product quality, customer
                    service, or delivery speed).
                  </li>
                  <li>
                    Include reviews from well-known clients or influencers, if
                    applicable.
                  </li>
                  <li>
                    Keep the feedback concise and impactful to maintain user
                    interest.
                  </li>
                  <li>
                    Update testimonials regularly to keep the section fresh and
                    relevant.
                  </li>
                </ul>
                <h4 className="mb-8 mt-4 text-lg font-semibold">Use Cases</h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li>
                    Highlight positive customer experiences to build trust and
                    encourage new buyers.
                  </li>
                  <li>
                    Share testimonials that focus on specific products or
                    services.
                  </li>
                  <li>
                    Feature feedback related to promotions or seasonal
                    offerings.
                  </li>
                </ul>
              </div>
              {/*Testimonials Section Ends*/}

              {/*Logo Slider Section Starts*/}
              <div
                id="LogoSliderSection"
                className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              >
                <h2>Logo Slider Section</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  The Logo Slider Section allows you to showcase key features,
                  services, or partner brands with visual icons or logos in a
                  clean, scrolling layout. This section is designed to highlight
                  trust-building elements or unique selling points (USPs) to
                  engage and reassure customers.
                </p>
                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Key Features
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-none">
                    <b>Logo or Icon Display:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Showcase icons or logos that represent your USPs,
                        services, or trusted partners.
                      </li>
                      <li>
                        Use visual elements to communicate key information at a
                        glance.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Slider Format:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Responsive slider for smooth scrolling through multiple
                        icons or logos.
                      </li>
                      <li>
                        Adjustable speed and navigation controls for better user
                        interaction.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Customizable Titles:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Add descriptive text below each icon to explain its
                        purpose or value (e.g., "Trusted Payment" or "Top Notch
                        Quality").
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Responsive Design:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Optimized for desktop and mobile views to maintain
                        seamless presentation across all devices.
                      </li>
                    </ul>
                  </li>
                </ul>
                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Customization Options
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-none">
                    <b>Logo or Icon Upload:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Upload custom logos or icons in SVG, PNG, or JPG
                        formats.
                      </li>
                      <li>
                        Adjust the order of icons to prioritize key messages.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Text Content:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Add short, impactful titles or descriptions for each
                        icon.
                      </li>
                      <li>
                        Customize the font, color, and alignment to match your
                        store's branding.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Slider Settings:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Configure autoplay options, slide speed, and loop
                        functionality.
                      </li>
                      <li>
                        Enable or disable navigation arrows or dots for user
                        control.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Spacing and Layout:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Adjust spacing between icons and the overall section
                        layout.
                      </li>
                      <li>
                        Set the number of icons visible per slide for desktop
                        and mobile.
                      </li>
                    </ul>
                  </li>
                </ul>
                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Best Practices
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li>
                    Use high-quality icons or logos that align with your brand’s
                    aesthetic.
                  </li>
                  <li>
                    Highlight essential features like free shipping, easy
                    returns, or secure payments to build customer trust.
                  </li>
                  <li>
                    Keep the text concise and focused for quick readability.
                  </li>
                  <li>
                    Regularly update the icons or logos to stay relevant with
                    new features or partnerships.
                  </li>
                </ul>
                <h4 className="mb-8 mt-4 text-lg font-semibold">Use Cases</h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li>
                    Showcase USPs such as "Free Shipping," "24/7 Customer
                    Support," or "Sustainable Materials."
                  </li>
                  <li>
                    Highlight collaborations or partnerships with well-known
                    brands.
                  </li>
                  <li>
                    Communicate services like "Directly from Manufacturer" or
                    "Easy Returns" to reassure customers.
                  </li>
                </ul>
              </div>
              {/*Logo Slider Section Ends*/}

              {/*Featured Product Section Starts*/}
              <div
                id="FeaturedProductSection"
                className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              >
                <h2>Featured Product Section</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  The Featured Product Section highlights a specific product
                  prominently on your store's homepage or any other page. This
                  section is ideal for promoting new arrivals, bestsellers, or
                  seasonal highlights to capture customer attention.
                </p>
                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Key Features
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-none">
                    <b>Single Product Display:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Showcase one specific product with its image, name,
                        price, and description.
                      </li>
                      <li>
                        Perfect for emphasizing flagship or promotional items.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Product Information:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Display key details, including product title, short
                        description, price, and discounts.
                      </li>
                      <li>
                        Highlight promotional offers or limited-time discounts
                        for better visibility.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Add to Cart Functionality:</b>
                    <ul className="list-disc pt-4">
                      <li>Include a clear and prominent Add to Cart button.</li>
                      <li>
                        Allow customers to quickly add the featured product to
                        their cart without navigating away.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Customizable Product Image Layout:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Support for multiple product images with stacked or
                        carousel layout.
                      </li>
                      <li>
                        Enable zoom or hover effects for better visual
                        engagement.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Variants Selector:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Showcase available product options like size, color, or
                        material.
                      </li>
                      <li>
                        Allow customers to select variants directly within the
                        section.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Promotional Tags and Badges:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Add badges like "New," "Bestseller," or "Limited Offer"
                        to the product display.
                      </li>
                      <li>
                        Highlight percentage discounts or price reductions to
                        draw attention.
                      </li>
                    </ul>
                  </li>
                </ul>
                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Customization Options
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-none">
                    <b>Product Selection:</b>
                    <ul className="list-disc pt-4">
                      <li>Manually select the product to feature.</li>
                      <li>
                        Change the featured product regularly to align with
                        promotions or new arrivals.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Image and Layout:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Choose between stacked or slider layouts for product
                        images.
                      </li>
                      <li>
                        Adjust image size, alignment, and spacing to match your
                        theme.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Add to Cart Button:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Customize the button text and style to suit your
                        branding.
                      </li>
                      <li>
                        Add optional Buy Now functionality for faster checkout.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Styling Options:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Customize fonts, colors, and spacing for product titles
                        and descriptions.
                      </li>
                      <li>
                        Add background colors or borders to make the section
                        stand out.
                      </li>
                    </ul>
                  </li>
                </ul>
                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Best Practices
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li>
                    Choose a product that resonates with your target audience or
                    aligns with current promotions.
                  </li>
                  <li>
                    Use high-quality images to showcase the product effectively.
                  </li>
                  <li>
                    Highlight the unique features or benefits of the featured
                    product.
                  </li>
                  <li>
                    Regularly update the section to keep your store fresh and
                    relevant.
                  </li>
                </ul>
                <h4 className="mb-8 mt-4 text-lg font-semibold">Use Cases</h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li>
                    Promote new arrivals to increase visibility and drive early
                    sales.
                  </li>
                  <li>
                    Highlight bestselling products to encourage trust and
                    conversions.
                  </li>
                  <li>
                    Showcase seasonal or limited-time products to create
                    urgency.
                  </li>
                </ul>
              </div>
              {/*Featured Product Section Ends*/}

              {/*Rich Text Section Starts*/}
              <div
                id="RichTextSection"
                className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              >
                <h2>Rich Text Section</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  The Rich Text Section allows you to add and format text
                  content anywhere on your Shopify store. This section is ideal
                  for sharing important messages, telling your brand story, or
                  adding promotional details in a visually appealing and
                  structured manner.
                </p>
                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Key Features
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-none">
                    <b>Customizable Text Content:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Add headings, paragraphs, or formatted text to share
                        information with your customers.
                      </li>
                      <li>
                        Use rich text formatting options like bold, italics, and
                        bullet points to emphasize key details.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Flexible Layout:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Position the text in a standalone section or combine it
                        with other media elements.
                      </li>
                      <li>
                        Adjust text alignment (left, center, or right) for
                        better visual presentation.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Call-to-Action (Optional):</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Add a button below the text to guide customers to
                        another page (e.g., "Learn More," "Shop Now").
                      </li>
                      <li>Customize the button text, color, and link.</li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Multi-Purpose Use:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Use this section to share stories, promotional offers,
                        policies, or FAQs.
                      </li>
                    </ul>
                  </li>
                </ul>
                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Customization Options
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-none">
                    <b>Text Content:</b>
                    <ul className="list-disc pt-4">
                      <li>Add and edit content directly in the editor.</li>
                      <li>
                        Use formatting tools to create visually engaging text
                        (e.g., headings, subheadings, bold text).
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Background and Spacing:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Customize the section background color to match your
                        store's branding.
                      </li>
                      <li>Adjust padding and margins for optimal spacing.</li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Font Styles:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Select font types, sizes, and colors that align with
                        your store's theme.
                      </li>
                      <li>
                        Highlight key text with font styling to draw attention.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Button (Optional):</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Enable or disable the button option based on your needs.
                      </li>
                      <li>
                        Customize button text, link, and style to create a clear
                        call-to-action.
                      </li>
                    </ul>
                  </li>
                </ul>
                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Best Practices
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li>
                    Keep the content concise and focused to maintain customer
                    engagement.
                  </li>
                  <li>
                    Use this section to communicate critical information like
                    your brand story, promotional details, or product benefits.
                  </li>
                  <li>
                    Align text formatting and styles with your store's overall
                    design for consistency.
                  </li>
                  <li>
                    Test the readability of the content on mobile and desktop
                    devices.
                  </li>
                </ul>
                <h4 className="mb-8 mt-4 text-lg font-semibold">Use Cases</h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li>
                    Share your brand’s mission, vision, or story in an engaging
                    format.
                  </li>
                  <li>
                    Announce limited-time offers, events, or new launches.
                  </li>
                  <li>
                    Provide informational content like return policies, shipping
                    details, or product care instructions.
                  </li>
                  <li>
                    Add a call-to-action to direct customers to specific pages
                    like "Contact Us" or "Shop Now."
                  </li>
                </ul>
              </div>
              {/*Rich Text Section Ends*/}

              {/*Image Banner Section Starts*/}
              <div
                id="ImageBannerSection"
                className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              >
                <h2>Image Banner Section</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  The Image Banner Section is a visually impactful feature that
                  allows you to showcase a large, high-quality image with text
                  overlay and a call-to-action. It is ideal for promoting
                  collections, products, or campaigns while maintaining a clean
                  and modern design.
                </p>
                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Key Features
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-none">
                    <b>Full-Width or Boxed Layout:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Display banners in a full-width format for maximum
                        visual impact or a boxed layout for a more structured
                        design.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Text Overlay:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Add a headline, subheading, and description directly
                        over the image.
                      </li>
                      <li>
                        Customize text alignment, size, and color to match your
                        brand's theme.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Call-to-Action (CTA):</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Include a customizable button with a clear action (e.g.,
                        "Shop Now," "Learn More").
                      </li>
                      <li>
                        Link the button to collections, products, or custom
                        pages.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Responsive Design:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Ensure the banner adjusts seamlessly across desktop and
                        mobile devices for an optimal user experience.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Custom Image Placement:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Adjust image alignment (center, left, or right) to
                        emphasize key visual elements.
                      </li>
                    </ul>
                  </li>
                </ul>
                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Customization Options
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-none">
                    <b>Image Upload:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Add a high-resolution image that aligns with your
                        promotion or branding.
                      </li>
                      <li>
                        Optimize image size for faster loading without
                        compromising quality.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Text Content:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Add and edit headings, subheadings, and descriptions.
                      </li>
                      <li>
                        Use rich text formatting to highlight key messages.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Button Options:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Enable or disable the CTA button based on your needs.
                      </li>
                      <li>
                        Customize button text, color, and link for better user
                        engagement.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Background and Spacing:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Add a background overlay to improve text readability.
                      </li>
                      <li>
                        Adjust padding and margins to create a balanced layout.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/*Image Banner Section Ends*/}

              {/*Collage Section Starts*/}
              <div
                id="CollageSection"
                className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              >
                <h2>Collage Section</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  The Collage Section is a creative and visually dynamic layout
                  designed to showcase multiple images, products, or promotions
                  in an engaging, grid-like structure. This section is perfect
                  for highlighting a variety of content, such as collections,
                  featured products, or brand stories.
                </p>
                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Key Features
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-none">
                    <b>Customizable Layout:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Arrange images in a grid, mosaic, or freeform collage
                        style.
                      </li>
                      <li>
                        Create unique combinations of large and small images for
                        an artistic look.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Multi-Purpose Use:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Add images, text, or call-to-action buttons within the
                        collage to drive engagement.
                      </li>
                      <li>
                        Use the section to showcase product collections, brand
                        highlights, or promotional offers.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Clickable Images:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Link individual images to products, collections, or
                        custom URLs.
                      </li>
                      <li>
                        Encourage users to explore more by clicking on visually
                        enticing content.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Text Overlay:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Add headlines or short descriptions to specific images
                        for additional context.
                      </li>
                      <li>
                        Customize text alignment, font, and color to match your
                        branding.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Responsive Design:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Ensure the collage adapts seamlessly to desktop and
                        mobile screens for an optimal browsing experience.
                      </li>
                    </ul>
                  </li>
                </ul>
                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Customization Options
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-none">
                    <b>Image Upload:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Upload multiple high-quality images to create your
                        collage.
                      </li>
                      <li>
                        Drag and drop to rearrange images in your desired
                        layout.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Overlay and Effects:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Add overlays or hover effects to images for a dynamic
                        user experience.
                      </li>
                      <li>
                        Adjust brightness, contrast, or opacity to enhance
                        visual appeal.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Links and CTAs:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Add clickable links to each image for better navigation.
                      </li>
                      <li>
                        Include optional buttons or text overlays for specific
                        promotions.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Spacing and Alignment:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Adjust spacing between images for a clean, organized
                        look.
                      </li>
                      <li>
                        Align images to fit seamlessly within your store’s
                        theme.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/*Collage Section Ends*/}

              {/*Multicolumn Section Starts*/}
              <div
                id="MulticolumnSection"
                className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              >
                <h2>Multicolumn Section</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  The Multicolumn Section provides a flexible layout to display
                  content in multiple columns. It is ideal for showcasing key
                  features, services, categories, or promotional content in a
                  structured and visually balanced format.
                </p>
                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Key Features
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-none">
                    <b>Flexible Column Layout:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Create up to 4 columns to organize and present
                        information.
                      </li>
                      <li>
                        Adjust the number of columns for desktop and mobile
                        views to ensure readability.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Content Types:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Add text, icons, images, or a combination of these to
                        each column.
                      </li>
                      <li>
                        Perfect for highlighting features, benefits, or product
                        categories.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Customizable Heading:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Include a heading for the section to introduce the
                        content or theme (e.g., "Our Services" or "Why Choose
                        Us").
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Call-to-Action Options:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Add buttons or links to each column to guide users to
                        relevant pages.
                      </li>
                      <li>
                        Customize the button text and style for clear and
                        actionable CTAs.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Responsive Design:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Optimize the layout for both desktop and mobile devices
                        to maintain a seamless user experience.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/*Multicolumn Section Ends*/}

              {/*Multirow Section Starts*/}
              <div
                id="MultirowSection"
                className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              >
                <h2>Multirow Section</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  The Multirow Section allows you to organize and display
                  content in multiple rows, offering flexibility to present
                  detailed information, product collections, or visual content
                  in a structured and visually appealing layout.
                </p>
                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Key Features
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-none">
                    <b>Customizable Rows:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Add multiple rows of content to present information in a
                        step-by-step or layered format.
                      </li>
                      <li>
                        Perfect for displaying product features, collections, or
                        promotional content.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Content Types:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Add text, images, buttons, or a combination of these in
                        each row.
                      </li>
                      <li>
                        Use this flexibility to create a compelling visual story
                        or promotional display.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Row-Specific Design:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Customize each row independently, including background
                        colors, images, and layout styles.
                      </li>
                      <li>
                        Highlight specific rows with unique designs to draw
                        attention.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Call-to-Action (Optional):</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Include buttons or links in each row to guide customers
                        to relevant pages or products.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/*Multirow Section Ends*/}

              {/*Custom Liquid Section Starts*/}
              <div
                id="CustomLiquidSection"
                className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              >
                <h2>Custom Liquid Section</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  The Custom Liquid Section provides advanced flexibility for
                  developers and merchants to add custom Liquid code directly to
                  their Shopify store. This section is ideal for integrating
                  third-party tools, custom functionality, or unique design
                  elements that aren’t supported by default sections.
                </p>
                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Key Features
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-none">
                    <b>Custom Code Integration:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Add custom Liquid code to extend your store's
                        functionality or design.
                      </li>
                      <li>
                        Utilize Shopify's Liquid templating language to pull
                        dynamic store data like products, collections, or cart
                        details.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Rich Content Flexibility:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Combine Liquid code with HTML, CSS, or JavaScript to
                        create custom layouts, dynamic content, or interactive
                        features.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Dynamic Content Display:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Use Liquid variables and loops to display personalized
                        or dynamic data (e.g., "Top Sellers," "Recently Viewed
                        Items").
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Real-Time Updates:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Instantly preview changes made to the Liquid code,
                        ensuring quick and accurate development.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/*Custom Liquid Section Ends*/}

              {/*Video Section Starts*/}
              <div
                id="VideoSection"
                className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              >
                <h2>Video Section</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  The Video Section allows you to embed and showcase videos
                  directly on your store, creating a dynamic and engaging
                  experience for your customers.
                </p>
                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Key Features
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-none">
                    <b>Embedded Video Support:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Embed videos from platforms like YouTube, Vimeo, or your
                        own hosted video files.
                      </li>
                      <li>
                        Display videos in high resolution for a professional
                        appearance.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Customizable Layout:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Choose between full-width or boxed layouts to match your
                        store design.
                      </li>
                      <li>
                        Include optional text, such as a heading or description,
                        alongside the video.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Autoplay and Loop Options:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Enable autoplay to grab customer attention immediately.
                      </li>
                      <li>Set videos to loop for continuous playback.</li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/*Video Section Ends*/}

              {/*Contact Form Section Starts*/}
              <div
                id="ContactFormSection"
                className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              >
                <h2>Contact Form Section</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  The Contact Form Section allows customers to reach out to you
                  directly, making it easy for them to ask questions, provide
                  feedback, or request support.
                </p>
                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Key Features
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-none">
                    <b>Customizable Form Fields:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Includes standard fields like Name, Email, and Message.
                      </li>
                      <li>
                        Add optional fields such as Subject, Phone Number, or
                        Order Number for more specific inquiries.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Responsive Design:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Optimized for both desktop and mobile devices, ensuring
                        customers can contact you seamlessly on any platform.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/*Contact Form Section Ends*/}

              {/*Email Signup Section Starts*/}
              <div
                id="EmailSignupSection"
                className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              >
                <h2>Email Signup Section</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  The Email Signup Section is designed to help you build your
                  email marketing list by collecting customer email addresses.
                </p>
                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Key Features
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-none">
                    <b>Customizable Signup Form:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Includes an email input field with a clear
                        call-to-action button (e.g., "Subscribe" or "Sign Up").
                      </li>
                      <li>
                        Customize the placeholder text and button label to align
                        with your brand voice.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Promotional Messaging:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Add a headline and description to communicate the value
                        of subscribing.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/*Email Signup Section Ends*/}

              {/*Collapsible Content Section Starts*/}
              <div
                id="CollapsibleContentSection"
                className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              >
                <h2>Collapsible Content Section</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  The Collapsible Content Section allows you to present detailed
                  information in an organized, expandable format.
                </p>
                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Key Features
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-none">
                    <b>Expandable Content Blocks:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Add multiple content blocks that expand and collapse
                        with a click.
                      </li>
                      <li>
                        Keep your store’s design clean while providing detailed
                        information when needed.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Customizable Headings:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Assign unique headings for each collapsible block to
                        guide customers.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Rich Content Support:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Add text, images, or links within each collapsible
                        block.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/*Collapsible Content Section Ends*/}

              {/*Product Page Layout Starts*/}
              <div
                id="ProductPageLayout"
                className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              >
                <h2>Product Page Layout</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  The Improved Product Page Layout enhances the shopping
                  experience by providing a visually appealing and feature-rich
                  product display. This layout combines clear product visuals,
                  intuitive selection options, and promotional highlights to
                  drive conversions.
                </p>

                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Key Features
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-none">
                    <b>Active Offers Block:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Display active promotions or discount codes prominently.
                      </li>
                      <li>
                        Use icons and short descriptions to make offers stand
                        out (e.g., "Flat 5% Off on First Purchase, Code:
                        WELCOME5").
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Add to Cart and Buy Now:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Offer two clear calls-to-action (CTAs) for adding the
                        product to the cart or proceeding directly to checkout.
                      </li>
                      <li>
                        Improves ease of use and boosts sales conversions.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Order on WhatsApp:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Provide an option for customers to place orders directly
                        via WhatsApp.
                      </li>
                      <li>
                        Convenient for users who prefer instant messaging for
                        purchases.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Percentage Discount Badge:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Automatically calculate and display percentage discounts
                        next to the price.
                      </li>
                      <li>
                        Enhances visibility of promotions and encourages
                        purchases.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Product Images Layout Options:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Stacked Layout: Display images vertically for a clean
                        and detailed view.
                      </li>
                      <li>
                        Thumbnails Slider: Include a scrolling thumbnail gallery
                        for compact and interactive navigation.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Size and Color Options:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Allow customers to choose size and color variations with
                        easily clickable buttons.
                      </li>
                      <li>Highlight the selected option for clarity.</li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Size Chart:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Provide a link to a size chart to help customers make
                        informed decisions.
                      </li>
                      <li>
                        Reduces the likelihood of returns due to size issues.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Quantity Selector:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Allow customers to adjust the quantity before adding the
                        product to the cart.
                      </li>
                      <li>
                        Simple "+" and "-" buttons for intuitive quantity
                        adjustments.
                      </li>
                    </ul>
                  </li>
                </ul>

                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Customization Options
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-none">
                    <b>Promotions:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Add, remove, or update active offers easily via the
                        settings.
                      </li>
                      <li>
                        Customize the icons and descriptions to align with your
                        branding.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Image Layout:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Toggle between stacked and thumbnail slider layouts
                        based on preference.
                      </li>
                      <li>
                        Adjust image sizes and aspect ratios for consistency.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Button Text:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Customize text for "Add to Cart," "Buy Now," and "Order
                        on WhatsApp" buttons.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Color and Size Variants:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Add or edit product variations with names, colors, and
                        sizes.
                      </li>
                      <li>
                        Highlight unavailable options with a disabled state.
                      </li>
                    </ul>
                  </li>
                </ul>

                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Best Practices
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li>
                    Highlight the most attractive offers in the Active Offers
                    Block.
                  </li>
                  <li>
                    Use high-quality product images to enhance the customer’s
                    visual experience.
                  </li>
                  <li>
                    Keep the layout clean and user-friendly to avoid
                    overwhelming customers.
                  </li>
                  <li>
                    Test the WhatsApp order feature to ensure smooth
                    functionality.
                  </li>
                </ul>

                <h4 className="mb-8 mt-4 text-lg font-semibold">Use Cases</h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li>Promote discounts during sales events or holidays.</li>
                  <li>
                    Highlight multiple product variations (e.g., colors, sizes)
                    in an intuitive way.
                  </li>
                  <li>
                    Engage mobile users by offering quick ordering options like
                    WhatsApp.
                  </li>
                </ul>
              </div>
              {/*Product Page Layout Ends*/}

              {/*Complementary Products Starts*/}
              <div
                id="ComplementaryProductsSection"
                className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              >
                <h2>Complementary Products Section</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  The Complementary Products Section is designed to display
                  products that pair well with the current item being viewed.
                  This section helps customers discover additional items,
                  encouraging upselling and cross-selling opportunities to
                  increase order value.
                </p>

                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Key Features
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-none">
                    <b>Dynamic Product Recommendations:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Display complementary products based on tags,
                        collections, or purchase history.
                      </li>
                      <li>
                        Automatically update recommendations to remain relevant
                        to the current product.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Customizable Layout:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Show products in a grid or slider format for an
                        organized display.
                      </li>
                      <li>
                        Include product images, names, prices, and discounts.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Add to Cart Button:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Enable quick-add functionality so customers can add
                        complementary products to their cart without leaving the
                        page.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Price and Discount Visibility:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Highlight discounts or promotional offers for suggested
                        products.
                      </li>
                      <li>
                        Encourage purchases by displaying potential savings.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Responsive Design:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Optimized for desktop and mobile views to ensure
                        seamless navigation and usability.
                      </li>
                    </ul>
                  </li>
                </ul>

                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Customization Options
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-none">
                    <b>Product Selection:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Choose products manually or let the section
                        automatically suggest complementary items based on
                        Shopify’s algorithms.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Display Settings:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Adjust the number of products shown per row or slide.
                      </li>
                      <li>
                        Enable or disable quick view, ratings, or additional
                        product details.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Styling Options:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Customize font styles, colors, and spacing to match your
                        store’s branding.
                      </li>
                      <li>
                        Add hover effects to product images for better
                        interactivity.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Call-to-Action Buttons:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Customize button text (e.g., "Add to Cart," "View
                        Product").
                      </li>
                      <li>
                        Adjust button style and placement for a clean layout.
                      </li>
                    </ul>
                  </li>
                </ul>

                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Best Practices
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li>
                    Recommend items that truly complement the customer’s current
                    selection (e.g., pairing a shirt with matching pants).
                  </li>
                  <li>
                    Use high-quality product images to attract attention and
                    encourage clicks.
                  </li>
                  <li>
                    Highlight discounts or exclusive deals on complementary
                    items to increase the likelihood of purchase.
                  </li>
                  <li>
                    Regularly update the section to ensure recommendations
                    remain relevant.
                  </li>
                </ul>

                <h4 className="mb-8 mt-4 text-lg font-semibold">Use Cases</h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li>
                    Pair accessories with main products (e.g., a belt with
                    pants, or a necklace with a dress).
                  </li>
                  <li>
                    Recommend essential add-ons like chargers for electronics or
                    cleaning kits for shoes.
                  </li>
                  <li>
                    Display products from the same collection or a matching
                    color palette.
                  </li>
                  <li>
                    Upsell higher-value complementary items to maximize order
                    value.
                  </li>
                </ul>
              </div>
              {/*Complementary Products Ends*/}

              {/*Whatsapp button block Starts*/}
              <div
                id="WhatsAppButtonBlock"
                className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              >
                <h2>WhatsApp Button Block</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  The WhatsApp Button Block is a powerful feature that allows
                  customers to directly connect with your store via WhatsApp.
                  This block enhances customer support, simplifies inquiries,
                  and facilitates faster communication, all while providing a
                  seamless user experience.
                </p>

                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Key Features
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-none">
                    <b>Direct WhatsApp Integration:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Provide customers with a quick and convenient way to
                        message your store via WhatsApp.
                      </li>
                      <li>
                        Open a chat window directly in the WhatsApp app or web
                        version.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Customizable Button:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Add a visually appealing WhatsApp button with a
                        recognizable icon.
                      </li>
                      <li>
                        Customize the text (e.g., "Chat with Us" or "Message Us
                        on WhatsApp") and color to match your store's branding.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Pre-Filled Messages:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Include an optional pre-filled message that customers
                        can send, such as "Hi, I have a question about [product
                        name]."
                      </li>
                      <li>
                        Personalize the message to streamline customer
                        inquiries.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Positioning Options:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Place the WhatsApp button anywhere on the page (e.g.,
                        product page, cart, or homepage).
                      </li>
                      <li>
                        Fixed or floating options for visibility across the
                        store.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Responsive Design:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Optimized for desktop and mobile devices to ensure
                        customers can access WhatsApp easily.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/*Whatsapp button block Ends*/}

              {/*You May Also Like Starts*/}
              <div
                id="YouMayAlsoLikeSection"
                className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              >
                <h2>You May Also Like Section</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  The You May Also Like Section is designed to recommend related
                  or complementary products to customers, enhancing the shopping
                  experience and boosting cross-selling opportunities.
                </p>

                <h4 className="mb-8 mt-4 text-lg font-semibold">
                  Key Features
                </h4>
                <ul className="text-body-color dark:text-body-color-dark pl-0 text-base">
                  <li className="list-none">
                    <b>Product Recommendations:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Showcase products that are similar or complementary to
                        the one being viewed.
                      </li>
                      <li>
                        Automatically generated suggestions based on product
                        tags, collections, or customer purchase history.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Responsive Grid Layout:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Display recommended products in a visually appealing
                        grid.
                      </li>
                      <li>
                        Optimized for both desktop and mobile devices for
                        seamless navigation.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Product Details:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Include essential details such as product name, price,
                        and thumbnail image.
                      </li>
                      <li>
                        Highlight discounted prices or percentage-off badges for
                        promotional products.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    <b>Dynamic Updates:</b>
                    <ul className="list-disc pt-4">
                      <li>
                        Automatically update recommendations based on inventory
                        changes or product relevancy.
                      </li>
                      <li>
                        Option to manually select products for greater control.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/*You May Also Like Ends*/}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

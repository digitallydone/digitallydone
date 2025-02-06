import { Image, Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const AboutUssection = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto flex flex-col-reverse justify-center p-4 lg:flex-row">
        <div className="flex flex-1 flex-col items-start justify-start gap-8 p-8 lg:p-20">
          <h3 className="mb-4 text-4xl font-bold uppercase text-primary md:mb-8">
            {" "}
            About Us
          </h3>
          <div className="space-y-4 text-lg text-copy">
            So, imagine Digitally Done is like a super cool team of people who
            are really good at using computers and the internet to help
            companies and brands become even better at talking to people and
            showing off how awe some they are. They have this special knack for
            making events, like big parties or important meetings, really
            exciting and memorable. Plus, they know all the tricks to make sure
            that when a company talks about itself on line, it’s like fireworks
            going off and everyone pays atten tion.
          </div>

          <Button as={Link} href="/about-us" color="primary" radius="none">
            Learn more
          </Button>
        </div>
        <div className="flex-1 p-8 lg:p-20">
          <Image
            src="/assets/hero.jpeg"
            isZoomed
            width={800}
            alt="digitally done "
            className="w-full aspect-square"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUssection;

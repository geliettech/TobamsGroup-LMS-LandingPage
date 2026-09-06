"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { testimonials } from "@/data/page";

const Testimonials = () => {
  return (
    <section className="bg-card min-h-94 md:min-h-134.25 w-full py-6 md:py-16 gap-5">
      <div className="min-h-102.25 px-6 md:px-16 gap-5">
        <div className="w-full max-w-328 mx-auto space-y-10.25">
          <h2 className="h-num text-center">Testimonials</h2>

          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="flex gap-5.75">
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.name}
                  className="basis-full sm:basis-1/2 lg:basis-[30%]"
                >
                  <Card className="w-full max-w-105.5 min-h-61 border-l-2! border-l-secondary py-5 px-6 bg-primary-foreground gap-6">
                    <CardHeader className="flex gap-5.25 min-h-11.25">
                      <Image
                        src={testimonial.avatar}
                        alt={`${testimonial.name} testimonial avatar`}
                        width={44}
                        height={44}
                        className="h-11 w-11 shrink-0 rounded-full object-cover"
                      />

                      <div>
                        <CardTitle className="base-semibold">
                          {testimonial.name}
                        </CardTitle>
                        <CardDescription className="small">
                          {testimonial.role}
                        </CardDescription>
                      </div>
                    </CardHeader>

                    <CardContent className="p-0 base">
                      {testimonial.content}
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="gap-3 w-full flex justify-end mt-10.25">
              <CarouselPrevious className="static translate-y-0 h-8 w-8 rounded-[8px] border-0 bg-secondary/10 text-secondary hover:bg-secondary/20 hover:text-secondary" />

              <CarouselNext className="static translate-y-0 h-8 w-8 rounded-[8px] border-0 bg-secondary/10 text-secondary hover:bg-secondary/20 hover:text-secondary" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

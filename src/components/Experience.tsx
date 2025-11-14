//Education and experience section
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";

import { Card, CardContent, Typography } from "@mui/material";

import ExperienceItems from "../helpers/experience.json";

type ExperienceItem = {
    title: string;
    fromto: string;
    fromtomobile: string;
    institution: string;
    position: string;
    description: string[];
};

const experience: ExperienceItem[] = ExperienceItems as ExperienceItem[];

function Experience() {
    return (
        <section id="experience" className='scroll-mt-16'>
        {/* Mobile Layout */}
        <div className="bg-neutral-800 h-1/2 w-full flex flex-col justify-center items-center md:hidden mr-2 pt-2 px-2 my-2">
        <h2 className="text-3xl">Education & Experience</h2>
            <Timeline position="right" sx={{ml: "-120px"}}>
                {experience.map((item, idx) => (
                    <TimelineItem key={item.title}>

                        <TimelineSeparator>
                            <TimelineDot className="bg-primary! border-white! h-5! w-5!" />
                            {idx < experience.length - 1 && <TimelineConnector />}
                        </TimelineSeparator>

                        <TimelineContent sx={{ 
                            py: "12px",
                            px: 2,
                            textAlign: "left", 
                        }}>
                            <Typography variant="body2" className="text-l! mb-1!">
                                <span className="bg-white! text-black! border-black! border-2! rounded-md! p-1">{item.fromtomobile}</span>
                            </Typography>

                            <Card
                                elevation={3}
                                className="bg-black/50! hover:bg-black/90! border! border-primary! rounded-md!"
                            >
                                <CardContent>
                                    <Typography variant="h6" className="text-primary!">
                                        {item.position}
                                    </Typography>

                                    {item.institution && (
                                        <Typography
                                            variant="subtitle2"
                                            className="text-white! mb-1"
                                        >
                                            {item.institution}
                                        </Typography>
                                    )}
                                </CardContent>
                            </Card>
                        </TimelineContent>

                    </TimelineItem>
                ))}
            </Timeline>
        </div>


        {/* Desktop/Laptop Layout */}
        <div className="bg-neutral-800 h-1/2 w-full hidden md:flex  flex-col justify-around 2xl:justify-start 2xl:pt-3 items-center px-1 mt-2">
        <h2 className="text-3xl">Education & Experience</h2>
            <Timeline position="alternate">
                {experience.map((item, idx) => (
                    <TimelineItem key={item.title}>

                        <TimelineSeparator>
                            <TimelineDot className="bg-primary! border-white! h-5! w-5!" />
                            {idx < experience.length - 1 && <TimelineConnector />}
                        </TimelineSeparator>

                        <TimelineContent sx={{ py: "12px", px: 2 }}>
                            <Typography variant="body2" className="text-l! mb-1!">
                                <span className="bg-white! text-black! border-black! border-2! rounded-md! p-1">{item.fromto}</span>
                            </Typography>

                            <Card
                                elevation={3}
                                className="bg-black/50! hover:bg-black/90! border! border-primary! rounded-md!"
                            >
                                <CardContent>
                                    <Typography variant="h6" className="text-primary!">
                                        {item.position}
                                    </Typography>

                                    {item.institution && (
                                        <Typography
                                            variant="subtitle2"
                                            className="text-white! mb-1"
                                        >
                                            {item.institution}
                                        </Typography>
                                    )}

                                    <Typography
                                        component="ul"
                                        className="list-disc list-outside pl-5 text-neutral-300! mb-1"
                                    >
                                        {item.description.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </TimelineContent>

                    </TimelineItem>
                ))}
            </Timeline>
        </div>
        </section>
    );
}

export default Experience;
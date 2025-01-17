import { Box, Typography, Link, Grid } from "@mui/material";
import Socials from "./socials";

const Footer = () => {
    let courses = [
        {
            id: 0,
            title: 'Frontend Development',
            youtubeLink: 'https://www.youtube.com/watch?v=YCbCGuq_NWE&list=PLSH9gf0XETou_b8C3SJm8rk69Z41eUgbQ&index=1',
        },
        {
            id: 1,
            title: 'Binary Trees',
            youtubeLink: 'https://www.youtube.com/watch?v=PBcgUy-XI-A&list=PLSH9gf0XETotuua1g7YYXWfZXZnU_LB5S&index=1'
        },
        {
            id: 2,
            title: 'Master Linked List',
            youtubeLink: 'https://www.youtube.com/watch?v=c8a4sRSPJvU&list=PLSH9gf0XETourRyZW56Rdh9e0Phx-AJM5&index=1',
        },
        {
            id: 3,
            image: 'stack',
            title: 'Stack Data Structure',
            youtubeLink: 'https://www.youtube.com/watch?v=saN4Mi_rXfs&list=PLSH9gf0XETotSpywVcJGIYODBNL_j0P0u&index=1',
        },
        {
            id: 4,
            title: 'HashMap & HashSet',
            youtubeLink: 'https://www.youtube.com/watch?v=QfgH3_MmrOM&list=PLSH9gf0XETouStSgwNw_7YCHhRgQU4lvd&index=1',
        },
    ]
    return (
        <Box sx={{ bgcolor: '#1e1e1e', color: 'white', p: 6 }} component="footer">
            <Grid container justifyContent='center'>
                <Grid item md={4} my={2}>
                    <Typography variant="h6" align="center" gutterBottom>
                        Courses
                    </Typography>
                    {
                        courses.map(course => (
                            <Typography
                                variant="subtitle1"
                                align="center"
                                color="text.secondary"
                                component="p"
                            >
                                <Link color='#fff' href={course.youtubeLink}>
                                    {course.title}
                                </Link>
                            </Typography>
                        ))
                    }
                </Grid>
                <Grid item md={4} my={2}>
                    <Typography variant="h6" align="center" gutterBottom>
                        Socials
                    </Typography>
                    <Socials />
                </Grid>
            </Grid>

            <Typography variant="body2" color="#fff" align="center">
                {'Copyright © '}
                <Link color="#fff" href="#">
                    Reboot Tech
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Box>
    )
}

export default Footer;
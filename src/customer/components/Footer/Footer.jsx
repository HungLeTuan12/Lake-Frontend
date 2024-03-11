import React from "react";
import Grid from '@mui/material/Grid'
import { Button, Typography } from "@mui/material";
const Footer = () => {
    return (
        <div>
           <Grid className="bg-black text-white text-center mt-10"
            container
            sx={{bgcolor:"black", color:"white", py:"3"}}
           >
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5 pt-5" variant="h6">Company</Typography>
                    <div><Button className="pb-5" variant="h6">About</Button></div>
                    <div><Button className="pb-5" variant="h6">Blog</Button></div>
                    <div><Button className="pb-5" variant="h6">Press</Button></div>
                    <div><Button className="pb-5" variant="h6">Jobs</Button></div>
                    <div><Button className="pb-5" variant="h6">Partners</Button></div>  
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5 pt-5" variant="h6">Solutions</Typography>
                    <div><Button className="pb-5" variant="h3">Marketing</Button></div>
                    <div><Button className="pb-5" variant="h3">Analystics</Button></div>
                    <div><Button className="pb-5" variant="h3">Commerce</Button></div>
                    <div><Button className="pb-5" variant="h3">Insights</Button></div>
                    <div><Button className="pb-5" variant="h3">Support</Button></div>  
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5 pt-5" variant="h6">Documentation</Typography>
                    <div><Button className="pb-5" variant="h3">Guides</Button></div>
                    <div><Button className="pb-5" variant="h3">API Status</Button></div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5 pt-5" variant="h6">Legal</Typography>
                    <div><Button className="pb-5" variant="h3">Claim</Button></div>
                    <div><Button className="pb-5" variant="h3">Privacy</Button></div>
                    <div><Button className="pb-5" variant="h3">Terms</Button></div>
                </Grid>
                <Grid className="pt-20 pb-5" item xs={12}>
                <Typography variant="body2" component="p" align="center">
                    &copy; 2024 My company. All rights reserved
                </Typography>
                <Typography variant="body2" component="p" align="center">
                    Made with love by me
                </Typography>
                <Typography variant="body2" component="p" align="center">
                    05/03/2024. Iam always still here and don't know what can be happening tomorrow !
                </Typography>
                
           </Grid>
           </Grid>
           
        </div>
    )
}
export default Footer
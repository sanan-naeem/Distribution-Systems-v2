import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';
import ShopImage from "../../../../assests/images/shop-icon.png";
import CardMedia from "@material-ui/core/CardMedia";
import React from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 40,
        minWidth: "500px",
        minHeight: "250px",

        backgroundColor: '#BFDCCD',
        // padding: theme.spacing(2),
    },
    content: {
        marginTop: theme.spacing(2),
    },
    cover: {
        width: 151,
        height: 151,
        margin: theme.spacing(2),
    },
}));

export default function (props) {
    const classes = useStyles();

    return (
        <Paper className={classes.root} elevate>
            <Grid container spacing={2}>
                <Grid item xs={11}>
                    <Typography variant="h5" style={{marginLeft: 10}}>Shop Info</Typography>
                </Grid>
                <Grid item xs={1}>
                    <Tooltip title="Edit Shop" aria-label="Edit Shop">
                        <IconButton size="small">
                            <EditIcon />
                        </IconButton>
                    </Tooltip>
                </Grid>
            </Grid>
            <Divider />
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <CardMedia
                        className={classes.cover}
                        image={ShopImage}
                    />
                </Grid>
                <Grid item className={classes.content} xs={5}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Typography>
                                {props.name}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>
                                {props.street} {props.city}, {props.providence} {props.zip}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>
                                Id: {props.id}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>
                                Zone: {props.zoneName}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.content} xs={4}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Typography>
                                {props.phone != null && "Phone: " + props.phone}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>
                                {props.email != null && "Email: " + props.email}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}
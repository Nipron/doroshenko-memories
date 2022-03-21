import React, {useState, useEffect} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {getPosts} from './actions/posts';
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import memories from './images/memories.jpg';
import useStyles from "./styles";
import {ssEvents} from "./api";

function App() {

    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());

        ssEvents.addEventListener("post", (e) => {

            console.log("UUII UUII UUII")
            console.log(e.data)

            /*const data = JSON.parse(e.data);
            if (userId !== data.userId) {
                toast("New incoming post", {
                    position: "bottom-right",
                    autoClose: 1000,
                    draggable: true,
                    pauseOnHover: true,
                    progress: undefined,
                    hideProgressBar: false,
                });
            }
            setTimeout(() => {
                appDispatch({ type: GET_POST_STREAM, payload: data });
            }, 500);*/
        });



    }, [currentId, dispatch])

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">
                    Memories Blia
                </Typography>
                <img className={classes.image} src={memories} alt="memories" height="60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;

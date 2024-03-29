import React, {useState, useEffect} from 'react'
import { TextField, Button, Typography, Paper } from '@mui/material';
import FileBase from 'react-file-base64';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useStyles from './styles';

import { createPost, updatePost } from '../../actions/posts';

const Form = ({currentId, setCurrentId}) => {

    const [postData, setPostData] = useState({ title: '', message: '', tags: '', selectedFile: '' });
    const post = useSelector((state) => currentId ? state.posts.posts.find((p) => p._id === currentId) : null);
    // const author = useSelector((state) => state.auth) 

    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();    
    const user = JSON.parse(localStorage.getItem('profile'))
    useEffect(() =>{
        if(post) setPostData(post);
    }, [post])
    const clear = () => {
        setCurrentId(0);
        setPostData({ title: '', message: '', tags: '', selectedFile: '' });
      };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (currentId === 0) {
            dispatch(createPost({ ...postData, name: user?.result?.name }, navigate));
            clear();
          } else {
            dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
            clear();
          }
    }
    const hasFormValues = postData.title || postData.message || postData.tags || postData.selectedFile ? true : false;
    const isEnabled = (postData.title && postData.message) ? true:false;
    if (!user?.result?.name) {
        return (
          <Paper className={classes.paper} elevation={6}>
            <Typography variant="h6" align="center">
              Please Sign In to create your own posts and like other's posts.
            </Typography>
          </Paper>
        );
      }
      
    return (
        <Paper className={classes.paper} elevation={6}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Editing' : 'Creating'} a Post</Typography>
                <TextField name="title" variant="outlined" label="Title *" fullWidth
                    value={postData.title}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                <TextField name="message" variant="outlined" label="Message *" fullWidth
                    multiline rows={4}
                    value={postData.message}
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth
                    value={postData.tags}
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false}
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                </div>
                <Button className={classes.buttonSubmit} disabled={!isEnabled} variant="contained" color="primary" size="large" type="submit" fullWidth>
                    Submit
                </Button>
                <Button variant="contained" disabled={!hasFormValues} color="secondary" size="small" onClick={clear} fullWidth>
                    Clear
                </Button>
            </form>
        </Paper>
    )
}

export default Form;

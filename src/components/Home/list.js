import React, { useEffect, useState } from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

export default function PostList() {
    // Initialize state to hold the posts
    const [posts, setPosts] = useState([]);

    useEffect(async () => {
        const res = await fetch(
            "https://www.reddit.com/r/reactjs.json"
        );
        const json = await res.json();
        // Save the posts into state
        setPosts(json.data.children.map(c => c.data));
    }, [setPosts]);

    return (
        <div>
            {
                posts.map(post => (
                    <List key={post.id}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    {'P'}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={post.title} secondary={post.author} />
                        </ListItem>
                    </List>
                ))
            }
        </div>
    );
}

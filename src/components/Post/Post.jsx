import React from 'react';
import { Box } from '@mui/material';
import TweetPost from 'src/UI/TweetPost';

function Post({
  displayName,
  username,
  verified,
  text,
  image,
  logoUrl,
  showIconList,
}) {
  return (
    <Box>
      <TweetPost
        displayName={displayName}
        username={username}
        verified={verified}
        text={text}
        image={image}
        logoUrl={logoUrl}
        showIconList={true}
      />
    </Box>
  );
}

export default Post;

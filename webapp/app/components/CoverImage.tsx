import React, { useState, useEffect } from 'react';
import {ComicType} from '../types'

const CoverImage = (link:ComicType) => {
  
  return link.cover_url? (
    <div>
      <img src={link.cover_url}/>
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default CoverImage
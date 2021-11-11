import React from 'react';
import profilePicture from '../assets/profile-pic.png';
import missingAvatar from '../assets/missing-avatar.png';

enum SizeDimension {
    sm = 40,
    lg = 60
}

type AvatarProps = {
    className?: string
    size: 'sm' | 'lg'
}

// eslint-disable-next-line func-names
const Avatar = function ({ className, size }: AvatarProps): JSX.Element {
  return (
    <img
      src={profilePicture}
      className={`rounded-circle ${className}` ?? ''}
      width={SizeDimension[size]}
      height={SizeDimension[size]}
      alt="avatar"
      onError={(e: any) => {
        e.target.onerror = null;
        e.target.src = missingAvatar;
      }}
    />
  );
};

Avatar.defaultProps = {
  className: '',
};

export default Avatar;

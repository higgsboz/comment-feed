import React, { SyntheticEvent } from 'react';
import profilePicture from '../assets/profile-pic.png';
import missingAvatar from '../assets/missing-avatar.png';

enum SizeDimension {
  sm = 40,
  lg = 60,
}

type AvatarProps = {
  className?: string;
  size: 'sm' | 'lg';
};

const Avatar = function ({ className, size }: AvatarProps): JSX.Element {
  return (
    <img
      src={profilePicture}
      className={`rounded-circle ${className}` ?? ''}
      width={SizeDimension[size]}
      height={SizeDimension[size]}
      alt="avatar"
      onError={(e: SyntheticEvent<HTMLImageElement>) => {
        const target = e.target as HTMLImageElement;
        target.onerror = null;
        target.src = missingAvatar;
      }}
    />
  );
};

Avatar.defaultProps = {
  className: '',
};

export default Avatar;

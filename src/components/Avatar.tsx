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

const Avatar = function ({ className, size }: AvatarProps) {
  return (
    <img
      src={profilePicture}
      className={`rounded-circle ${className}` ?? ''}
      width={SizeDimension[size]}
      height={SizeDimension[size]}
      alt="avatar"
            // @ts-ignore
      onError={(e) => { e.target.onerror = null; e.target.src = missingAvatar; }}
    />
  );
};

export default Avatar;

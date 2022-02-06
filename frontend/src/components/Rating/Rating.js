import { Wrapper } from './RatingStyles'
import StarIcon from '@mui/icons-material/Star'
import StarOutlineIcon from '@mui/icons-material/StarOutline'
import StarHalfIcon from '@mui/icons-material/StarHalf'

export const Rating = ({ value, color }) => {
  return (
    <Wrapper style={{ color }}>
      {value >= 1 ? (
        <StarIcon fontSize="small" />
      ) : value >= 0.5 ? (
        <StarHalfIcon fontSize="small" />
      ) : (
        <StarOutlineIcon fontSize="small" />
      )}
      {value >= 2 ? (
        <StarIcon fontSize="small" />
      ) : value >= 1.5 ? (
        <StarHalfIcon fontSize="small" />
      ) : (
        <StarOutlineIcon fontSize="small" />
      )}
      {value >= 3 ? (
        <StarIcon fontSize="small" />
      ) : value >= 2.5 ? (
        <StarHalfIcon fontSize="small" />
      ) : (
        <StarOutlineIcon fontSize="small" />
      )}
      {value >= 4 ? (
        <StarIcon fontSize="small" />
      ) : value >= 3.5 ? (
        <StarHalfIcon fontSize="small" />
      ) : (
        <StarOutlineIcon fontSize="small" />
      )}
      {value >= 5 ? (
        <StarIcon fontSize="small" />
      ) : value >= 4.5 ? (
        <StarHalfIcon fontSize="small" />
      ) : (
        <StarOutlineIcon fontSize="small" />
      )}
    </Wrapper>
  )
}

Rating.defaultProps = {
  color: '#41295a',
}

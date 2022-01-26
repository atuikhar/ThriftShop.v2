import { Wrapper } from './RatingStyles'
import StarIcon from '@mui/icons-material/Star'
import StarOutlineIcon from '@mui/icons-material/StarOutline'
import StarHalfIcon from '@mui/icons-material/StarHalf'

export const Rating = ({ value, color }) => {
  return (
    <Wrapper style={{ color }}>
      {value >= 1 ? (
        <StarIcon fontSize="large" />
      ) : value >= 0.5 ? (
        <StarHalfIcon fontSize="large" />
      ) : (
        <StarOutlineIcon fontSize="large" />
      )}
      {value >= 2 ? (
        <StarIcon fontSize="large" />
      ) : value >= 1.5 ? (
        <StarHalfIcon fontSize="large" />
      ) : (
        <StarOutlineIcon fontSize="large" />
      )}
      {value >= 3 ? (
        <StarIcon fontSize="large" />
      ) : value >= 2.5 ? (
        <StarHalfIcon fontSize="large" />
      ) : (
        <StarOutlineIcon fontSize="large" />
      )}
      {value >= 4 ? (
        <StarIcon fontSize="large" />
      ) : value >= 3.5 ? (
        <StarHalfIcon fontSize="large" />
      ) : (
        <StarOutlineIcon fontSize="large" />
      )}
      {value >= 5 ? (
        <StarIcon fontSize="large" />
      ) : value >= 4.5 ? (
        <StarHalfIcon fontSize="large" />
      ) : (
        <StarOutlineIcon fontSize="large" />
      )}
    </Wrapper>
  )
}

Rating.defaultProps = {
  color: '#41295a',
}

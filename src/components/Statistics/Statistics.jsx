import PropTypes from 'prop-types';
import { getRandomHexColor } from 'common/randomColor';
import { Container, StatList, Item,Title } from './Statistics.styled';

export const Statistics = ({ stats }) => { 
    return <Container>
  <Title>Upload stats</Title>

  <StatList>
            {stats.map(({ id, label, percentage }) => {
                
                return (<Item key={id} style={{backgroundColor: getRandomHexColor(),
          }}>
                            <span className="label">{label}</span>
                            <span className="percentage">{percentage}%</span>
                        </Item>)
                    })
            }
        </StatList>
</Container>
}



Statistics.propTypes ={
    stats: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
  }),   )
}

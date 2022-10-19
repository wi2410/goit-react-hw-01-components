import PropTypes from 'prop-types';
import { getRandomHexColor } from 'common/randomColor';

export const Statistics = ({ stats }) => { 
    return <section className="statistics">
  <h2 className="title">Upload stats</h2>

  <ul>
            {stats.map(({ id, label, percentage }) => {
                
                return (<li key={id} style={{backgroundColor: getRandomHexColor(),
          }}>
                            <span className="label">{label}</span>
                            <span className="percentage">{percentage}%</span>
                        </li>)
                    })
            }
        </ul>
</section>
}



Statistics.propTypes ={
    stats: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
  }),   )
}

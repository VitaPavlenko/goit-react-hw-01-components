import PropTypes from 'prop-types';
import s from './statistics.module.css';
function Statistics({ stats }) {
  return (
    <section className={s['statistics']}>
      <h2 className={s['title']}>Upload stats</h2>
      <ul className={s['stat-list']}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={s['item']}
            style={{
              backgroundColor: `#${Math.floor(
                Math.random() * 16777215,
              ).toString(16)}`,
            }}
          >
            <span className={s['label']}>{stat.label}</span>
            <span className={s['percentage']}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  stats: PropTypes.array,
};

export default Statistics;

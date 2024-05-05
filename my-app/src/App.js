import './App.css';
import 'boxicons'
import logoDNT from './logo que diga Definitly not twitter ;D (1).png';

function App() {
  function toggleMenu(){
    document.querySelector('.container').classList.toggle('active');
  }

  return (
    <>
      <div className='container'>
        <div className='toggle-menu' onClick={toggleMenu}><img src={logoDNT} alt='logoDNT'/></div>
        <ul className='menu'>
          <li style={{"--i": 1}}>
            <a href='/feed'>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAIJJREFUSEvtlbENgDAMBC+jsAlswmaMAqOwCTRAAYo4WXIaSOtPPufk5ULyKsnn09xgBvoK1Qp0R83qHgTbS8tOYqv7DaoNvT7P/RfZ3lpd+A0mYKzcfwGGsxYl0PlsbmDRw0Gz6OFHTjew6GECu9Hqwjn4sIHNgdW1H5k2B1qXPvR3ZX0oGaTI0DoAAAAASUVORK5CYII="/>
            </a>
          </li>
          <li style={{"--i": 2}}>
            <a href='/dailymeme'>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAZNJREFUSEvFletNBDEMhOc6AUEFNAA0QAk8flAFSIAETfCHRwk0AFRAAyCgEtgPeVZObje3BzphaZWNMvb4FWemFctsxfY1hWBHEt92rB/d+iTpM1b+R6VFsCbpJoy2bEC4K4l1TsYIziWdBRrFu+QtxETEehCrMegVMkSQjV906DmlZAGSw+TMHL4mQOE9DBB2M7+JiIgeI01HWa8mAAT4tisiwGXEkZOudStmAkKlqAVgCYbcFH30mcAeOI/ZI4pc12LovLZR3AO8JwpSQ8/znyWnzdj6HEdIM7UjioKA4hIm+QPEv/ubs5w6Y+tz9gU2pygTDF6aifX4CtyP7UzgDlqmPWtON0qfzlaRUX6VtLHA8zdJm4FpFjlfFvfxfoyJFgfj4j4AzgKNQhRFinIf5445kXQ5wnAq6SrO3Fl9B9UE7POo6L2QtCXpWNJeGHuQdC3pJfaOnm1Rw6Fh50IBXjTswDSH4xBBPSH9wDynIeaR7XE96sy/PTiuKZ7685PJGVE5ol8/mRMvbhs25dH/E9E3ez9tGW02LyUAAAAASUVORK5CYII="/>
            </a>
          </li>
          <li style={{"--i": 3}}>
            <a href='login-register'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAR5JREFUSEvVlF0OATEUhe/shJVgJ6wEK8FKsBJ2wnzJbdKp256GzIMmHkzT8537O9jMZ5hZ33oBCzM7mdnazJ7+O47/b8pgD2Dr4qUWoMv48dCCKACOry6AY8SIBujeI9m1IlEA0oJYEs/NpshI06YWhQI83PHS3eY6RMI9qeI+PL8AEHy5alVHAcg/dYhSRD2ow9nMqMNXEeRpSB2TFxlR8l9tVxUBAslp5BDnRFA9PQAezzpoalib9yoC0rPyQkeTTIveW9NcA9A5DBmp6TmAwomOAPl6qD50OAZoVd6EHRUB0vQ2+zsLq9xNk6kuAV37JchZ3mWToSwBabnJ/g4gKbWT5VcCWstNFTtcfiVALi9B+Xiv5kC5lvf/D3gDooFEGQmY59EAAAAASUVORK5CYII="/>
            </a>
          </li>
          <li style={{"--i": 4}}>
            <a href='/post'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAASVJREFUSEu1ldkRwjAMBZVOoBKgE6gEqASoBKgEOoFsxvLIRolNDs3wEcd6qyuikYWtWVhfSoCViOxDEBsR2bbPb/N7tmeP8OzGOgQ4icixIkOAt/Ye93/MAxDlvUI4vwLoEDKK73IAJXmNEFcXIDtbshxA5GQwxYCsVcACaOZlirLxJQuan0wR4joxlnNt753DO226d2Z9EAeSAKg9PchNs7T98c6sXyyTLVEfgOiJmOg1Q+/MDcwC5miwQgiIkU1KNGeTEQeSAKgxWXh9+Ge4escUkakfGhp8A0A681bFWEjVqlCwbtGaZYcPU1W97Gy9P07xNX02KOYKD5VoCBDHr7brpT8cm0EcvVrxvibnGbjNq4WUMmABdl/kWCsBxupGv8UBX1OcOhmxz+woAAAAAElFTkSuQmCC"/>
            </a>
          </li>
          <li style={{"--i": 5}}>
            <a href='/my-posts'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMtJREFUSEvllcERwjAMBDedkE6gFCohVAKdQCekE+CYhJHBxBImwyP++CPdSrJ9bph5NTPrkwOsgAOwDsLPwBbobd4r4FvxUVPiGwuxACuuwDbQgXJPgPYEYgEKiI7lUw0alzpJzuAaqNgT+ijedrAMgK6hDnLnmFF4RBI/DsKdAxICWPGx+BLEDciJeyAuwJR4CeICTNlK6VovEOC4+klIeETVgMvwSqNCufin3Vuzk1XrJ5MV1CxZ9f5u/dqzX2aN+FvuXz79n3ZwA6H9KxltEJMLAAAAAElFTkSuQmCC"/>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;

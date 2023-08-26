import 'css-doodle';

const Doodle = () => (
  <css-doodle>
    {`:doodle {
				@grid: 18 / 110vmax;
				grid-gap: 4px;
				position: fixed;
				top: 0;
			}

			transition: .2s cubic-bezier(.175, .885, .32, 1.275) @rand(300ms);
			background: rgb(@rand(100, 240), @rand(200, 240), 240);
			opacity: @rand(0.1, 0.5);
			@shape: circle;
			@size: @rand(3px);
			@place-cell: @rand(90%) @rand(90%);`}
  </css-doodle>
);

export default Doodle;
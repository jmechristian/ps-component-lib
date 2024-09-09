import { Author } from '../../../../defs';
import { H1 } from '../../../../main';
import { AuthorBlock } from '../../../utility/AuthorBlock';
import '../../../../styles.css';
// Define the props type

interface HeaderTwoColumnTextProps {
  headline: string;
  subheadline: string;
  centered: boolean;
  authors?: Author[];
}

export const HeaderTwoColumnText: React.FC<HeaderTwoColumnTextProps> = ({
  headline = 'Extended Producer Responsibility (EPR)',
  subheadline = 'Extended Producer Responsibility (EPR) in packaging design is a policy approach that holds manufacturers accountable for the entire lifecycle of their products, including end-of-life management. This means that producers are responsible for the collection, recycling, and disposal of their packaging materials, incentivizing them to design more sustainable and eco-friendly packaging solutions. EPR aims to reduce environmental impact and promote a circular economy by shifting the cost and responsibility of waste management from taxpayers to producers.',
  centered,
  authors,
}) => {
  return (
    <div
      className={`grid lg:grid-cols-2 items-center w-full gap-10 max-w-7xl mx-auto px-4 xl:px-0 ${centered ? 'text-center' : 'text-left'}`}
    >
      <div className='flex flex-col gap-3'>
        <H1 children={headline} textColor='text-black' />
        <div className='flex items-center flex-wrap gap-5'>
          {authors && authors.length > 0 ? (
            authors.map((au) => <AuthorBlock author={au} />)
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className='text-lg leading-relaxed'>{subheadline}</div>
    </div>
  );
};

import { MdAccountCircle, MdExitToApp } from 'react-icons/md';
import { BrutalCircleIconTooltip } from '../../../main';
import { AuthorName } from '../../../main';
import '../../../styles.css';

interface GetLessonResponse {
  getLesson: {
    author: string[];
    backdate: string;
    content: string;
    createdAt: string;
    id: string;
    media: string;
    objectives: string[];
    screengrab: string | null;
    seoImage: string;
    slug: string;
    status: string;
    subhead: string;
    tags: {
      items: {
        id: string;
        tags: {
          id: string;
          tag: string;
        };
      }[];
    };
    title: string;
    type: string;
    videoLink: string | null;
  };
}

interface LessonComponentProps {
  lessonData: GetLessonResponse;
  view: () => void;
  authors: string[];
}

export const LessonCardItem: React.FC<LessonComponentProps> = ({
  authors,
  lessonData,
  view,
}) => {
  const { getLesson } = lessonData;

  const newDate =
    getLesson &&
    new Date(
      getLesson.backdate ? getLesson.backdate : getLesson.createdAt
    ).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

  return (
    <div
      className={`w-full max-w-[400px] mx-auto h-full border-2 border-black p-2 flex flex-col gap-2 relative ${
        getLesson.type === 'LOTM'
          ? 'bg-brand-yellow/20'
          : getLesson.type === 'REGULATORY'
            ? 'bg-clemson/20'
            : 'bg-base-brand/20'
      } transition-all`}
    >
      {/* MEDIA */}
      <div>
        <div
          className='w-full aspect-[16/9] max-h-full bg-brand-indigo-light bg-cover bg-center'
          style={{ backgroundImage: `url(${getLesson.seoImage})` }}
        ></div>
      </div>
      {/* CONTENT */}
      <div className='bg-white border-black border flex flex-col gap-2 p-5 h-full relative'>
        <div className='absolute w-full h-16 bg-gradient-to-t from-white via-white z-10 bottom-0 left-0 right-0'></div>
        <div className='text-sm'>{newDate}</div>
        <div className='h4-base'>{getLesson.title}</div>
        <div className='flex flex-wrap max-w-[75%] gap-x-1.5 gap-y-1'>
          {authors &&
            authors.map((auth) => (
              <div className='flex items-center gap-0.5' key={auth}>
                <div>
                  <MdAccountCircle color='gray' size={16} />
                </div>
                <AuthorName name={auth} />
              </div>
            ))}
        </div>
        <div
          className='text-sm leading-tight max-h-[157px] overflow-scroll pb-10'
          id='scrollers'
        >
          {getLesson.subhead}
        </div>
      </div>
      {/* BUTTONS */}
      <div className='flex w-full items-center justify-between gap-2.5 py-1.5'>
        <div className='max-w-2/3 flex flex-wrap gap-1.5'>
          {getLesson.tags && getLesson.tags.items.length > 0 ? (
            getLesson.tags.items.map((t) => (
              <div
                className='text-xs bg-white/40 py-1 px-1.5 border border-black uppercase font-semibold'
                key={t.id}
              >
                {t.tags.tag}
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
        <div className='flex items-center gap-2'>
          <BrutalCircleIconTooltip
            tooltip={'View'}
            bgColor={'bg-[#ff9321]'}
            fn={view}
          >
            <MdExitToApp color='white' size={22} />
          </BrutalCircleIconTooltip>
        </div>
      </div>
    </div>
  );
};

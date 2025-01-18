import { CloudUploadIcon, XIcon } from 'lucide-react'
import { cn } from '~/lib/utils'
import { FileDrop } from './file-drop'
import { Button } from './ui'

const accepts = {
  image: ['.png', '.jpg', '.jpeg', '.gif', '.webp'],
  video: ['.mp4', '.webm'],
  audio: ['.mp3', '.ogg', '.wav'],
}

export const MediaFileDropInput = ({
  id,
  name,
  type,
}: {
  id?: string
  name?: string
  type: 'image' | 'video' | 'audio'
}) => {
  return (
    <FileDrop
      id={id}
      name={name}
      accepts={accepts[type]}
      className={({ files, isDragging }) =>
        cn(
          'w-full cursor-pointer rounded-md border-2 p-4 transition-colors hover:bg-accent',
          isDragging && 'bg-accent',
          files && files.length > 0 && 'bg-accent',
        )
      }
    >
      {({ isDragging, files, removeFile }) => (
        <div className="flex flex-col items-center gap-4 text-center">
          <CloudUploadIcon className="size-12 stroke-muted-foreground" />
          {isDragging ? (
            <p>ファイルをここにドロップ</p>
          ) : (
            <>
              <p className="italic text-muted-foreground hover:text-accent-foreground">
                <strong>{files.map((f) => f.name)}</strong>
              </p>
              {files.length >= 1 && (
                <Button
                  type="button"
                  variant="link"
                  className="text-muted-foreground"
                  onClick={(e) => {
                    e.stopPropagation()
                    removeFile(0)
                  }}
                >
                  <XIcon />
                  クリア
                </Button>
              )}
            </>
          )}
        </div>
      )}
    </FileDrop>
  )
}

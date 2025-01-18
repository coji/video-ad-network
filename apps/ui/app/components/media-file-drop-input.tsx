import {
  CloudUploadIcon,
  FileAudio,
  FileIcon,
  FileImage,
  FileVideo,
  XIcon,
} from 'lucide-react'
import { useState } from 'react'
import { cn } from '~/lib/utils'
import { FileDrop } from './file-drop'
import { Button, Stack } from './ui'

const accepts = {
  image: ['.png', '.jpg', '.jpeg', '.gif', '.webp'],
  video: ['.mp4', '.webm'],
  audio: ['.mp3', '.ogg', '.wav'],
}

const MediaIcon = ({
  type,
  className,
}: React.ComponentProps<'svg'> & { type: string }) => {
  const c = cn('inline-block h-6 w-6', className)
  if (type.startsWith('image')) {
    return <FileImage className={c} />
  }
  if (type.startsWith('video')) {
    return <FileVideo className={c} />
  }
  if (type.startsWith('audio')) {
    return <FileAudio className={c} />
  }
  return <FileIcon className={c} />
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
  const [metadataMap, setMetadataMap] = useState<{
    [key: string]: { width?: number; height?: number; duration?: number }
  }>({})

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
          <CloudUploadIcon className="size-6 stroke-muted-foreground" />

          {isDragging ? (
            <p>ファイルをここにドロップ</p>
          ) : (
            <>
              {files.map((f, index) => (
                <div
                  key={`${f.name}_${index}`}
                  className="grid w-full grid-cols-1 place-items-center gap-4 p-4 italic text-muted-foreground"
                >
                  <Stack align="center">
                    <strong>
                      <MediaIcon type={f.type} className="mr-2" />
                      {files.map((f) => f.name)}
                    </strong>
                    <div>
                      {f.type.startsWith('image') && (
                        <img
                          src={URL.createObjectURL(f)}
                          alt={f.name}
                          className="h-24 w-auto border object-contain"
                          onLoad={(e) => {
                            if (!metadataMap[f.name]?.width) {
                              setMetadataMap((prev) => ({
                                ...prev,
                                [f.name]: {
                                  width: e.currentTarget?.naturalWidth,
                                  height: e.currentTarget?.naturalHeight,
                                },
                              }))
                            }
                          }}
                        />
                      )}
                      {metadataMap[f.name]?.width &&
                        metadataMap[f.name]?.height && (
                          <p className="text-sm">
                            {metadataMap[f.name].width} x{' '}
                            {metadataMap[f.name].height}
                          </p>
                        )}
                      {f.type.startsWith('audio') && (
                        <audio
                          controls
                          onLoadedMetadata={(e) =>
                            setMetadataMap((prev) => ({
                              ...prev,
                              [f.name]: { duration: e.currentTarget?.duration },
                            }))
                          }
                        >
                          <source src={URL.createObjectURL(f)} type={f.type} />
                          <track
                            kind="captions"
                            srcLang="en"
                            label="English captions"
                          />
                        </audio>
                      )}
                      {f.type.startsWith('video') && (
                        <video
                          controls
                          className="h-24 w-auto"
                          onLoadedMetadata={(e) =>
                            setMetadataMap((prev) => ({
                              ...prev,
                              [f.name]: { duration: e.currentTarget?.duration },
                            }))
                          }
                        >
                          <source src={URL.createObjectURL(f)} type={f.type} />
                          <track
                            kind="captions"
                            srcLang="en"
                            label="English captions"
                          />
                        </video>
                      )}
                      {metadataMap[f.name]?.duration && (
                        <p className="text-sm">
                          {metadataMap[f.name].duration?.toFixed(1)} seconds
                        </p>
                      )}
                    </div>
                  </Stack>
                </div>
              ))}

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

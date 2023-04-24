#define STB_IMAGE_IMPLEMENTATION

#define STBI_NO_STDIO
#define STBI_ASSERT(...)
// TODO: add support for HDR
// HDR requires support for strcmp, strncmp and strtol and I'm just too lazy rn to implement them
#define STBI_NO_HDR
#define STBI_NO_LINEAR

#define STBI_MALLOC malloc
#define STBI_FREE(...)
#define STBI_REALLOC_SIZED realloc_sized

#include "stb_image.h"

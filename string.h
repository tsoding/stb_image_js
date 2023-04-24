#ifndef STRING_H_
#define STRING_H_

typedef unsigned long size_t;

void *memset(void *s, int c, size_t n)
{
    char *sc = s;
    for (size_t i = 0; i < n; ++i) *sc++ = c;
    return s;
}

void *memcpy(void *dest, const void *src, size_t n)
{
    char *cdest = dest;
    const char *csrc = src;
    for (size_t i = 0; i < n; ++i) *cdest++ = *csrc++;
    return dest;
}

#endif // STRING_H_

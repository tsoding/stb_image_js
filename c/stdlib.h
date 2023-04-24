#ifndef STDLIB_H_
#define STDLIB_H_

#include <string.h>

extern char __heap_base;
static char *bump = &__heap_base;

void heap_reset(void)
{
    bump = &__heap_base;
}

void *malloc(size_t s)
{
    // |****|****|**
    // |****|****|****|** +3
    // |****|****|****|   /4*4
    ///////////////////////////
    // |****|****|
    // |****|****|***     +3
    // |****|****|        /4*4
    s = (s + 3)/4*4;
    void *result = bump;
    bump += s;
    return result;
}

void *realloc_sized(void *oldptr, size_t oldsz, size_t newsz)
{
    if (oldsz >= newsz) return oldptr;
    void *newptr = malloc(newsz);
    memcpy(newptr, oldptr, oldsz);
    return newptr;
}

int abs(int j)
{
    if (j < 0) j = -j;
    return j;
}

#endif // STDLIB_H_

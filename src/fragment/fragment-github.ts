import { Setting } from 'obsidian'
import Emo from '../main'
import { EmoFragment } from '../base/emo-fragment'
import { HostingProvider } from '../config'
import { t } from '../lang/helpers'

export class GithubFragment extends EmoFragment {
  constructor (el: HTMLElement, plugin: Emo) {
    super(HostingProvider.Github, el, plugin)
  }

  display (el: HTMLElement, plugin: Emo): void {
    const parms = plugin.config.github_parms
    el.createEl('h3', { text: t('Github Settings') })
    new Setting(el)
      .setName(t('owner'))
      .addText((text) => {
        text
          .setPlaceholder('')
          .setValue(parms.required.owner)
          .onChange(async (value) => {
            parms.required.owner = value
            await plugin.saveSettings()
          })
      })
    new Setting(el)
      .setName(t('repo'))
      .addText((text) => {
        text
          .setPlaceholder('')
          .setValue(parms.required.repo)
          .onChange(async (value) => {
            parms.required.repo = value
            await plugin.saveSettings()
          })
      })
    new Setting(el)
      .setName(t('branch'))
      .addText((text) => {
        text
          .setPlaceholder('')
          .setValue(parms.required.branch)
          .onChange(async (value) => {
            parms.required.branch = value
            await plugin.saveSettings()
          })
      })
    new Setting(el)
      .setName(t('token'))
      .addText((text) => {
        text
          .setPlaceholder('')
          .setValue(parms.required.token)
          .onChange(async (value) => {
            parms.required.token = value
            await plugin.saveSettings()
          })
      })
    new Setting(el)
      .setName(t('message'))
      .addText((text) => {
        text
          .setPlaceholder('')
          .setValue(parms.required.message)
          .onChange(async (value) => {
            parms.required.message = value
            await plugin.saveSettings()
          })
      })
    new Setting(el)
      .setName(t('path'))
      .addText((text) => {
        text
          .setPlaceholder('obsidian/ -> obsidian/pic.png')
          .setValue(parms.path)
          .onChange(async (value) => {
            parms.path = value
            await plugin.saveSettings()
          })
      })
    new Setting(el)
      .setName(t('random filename'))
      .setDesc(t('random filename desc'))
      .addToggle((toggle) => {
        toggle.setValue(parms.random)
        toggle.onChange(async (value) => {
          parms.random = value
          await plugin.saveSettings()
        })
      })
  }
}

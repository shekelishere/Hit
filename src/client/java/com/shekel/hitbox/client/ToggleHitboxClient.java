package com.shekel.hitbox.client;

import com.mojang.blaze3d.platform.InputConstants;
import net.fabricmc.api.ClientModInitializer;
import net.fabricmc.fabric.api.client.event.lifecycle.v1.ClientTickEvents;
import net.fabricmc.fabric.api.client.keybinding.v1.KeyBindingHelper;
import net.minecraft.client.KeyMapping;
import net.minecraft.client.Minecraft;
import net.minecraft.client.gui.components.debug.DebugScreenEntries;
import net.minecraft.network.chat.Component;
import net.minecraft.resources.Identifier;
import org.lwjgl.glfw.GLFW;

public class ToggleHitboxClient implements ClientModInitializer {
	public static final String MOD_ID = "togglehitbox";

	private static final KeyMapping.Category CATEGORY =
			KeyMapping.Category.register(Identifier.fromNamespaceAndPath(MOD_ID, "main"));

	private static KeyMapping toggleKey;

	@Override
	public void onInitializeClient() {
		// Default key is H; it can be rebound in Options > Controls > Key Binds.
		toggleKey = KeyBindingHelper.registerKeyBinding(new KeyMapping(
				"key.togglehitbox.toggle",
				InputConstants.Type.KEYSYM,
				GLFW.GLFW_KEY_H,
				CATEGORY
		));

		ClientTickEvents.END_CLIENT_TICK.register(client -> {
			while (toggleKey.consumeClick()) {
				toggleHitboxes(client);
			}
		});
	}

	private static void toggleHitboxes(Minecraft client) {
		// Flips the same setting as vanilla F3+B, so both stay in sync.
		boolean enabled = client.debugEntries.toggleStatus(DebugScreenEntries.ENTITY_HITBOXES);

		if (client.player != null) {
			client.player.displayClientMessage(
					Component.translatable(enabled ? "togglehitbox.message.on" : "togglehitbox.message.off"),
					true
			);
		}
	}
}
